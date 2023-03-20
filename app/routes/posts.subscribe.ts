import type { LoaderArgs } from "@remix-run/cloudflare";

import { emitter } from "~/services/emitter.server";

import { eventStream } from "remix-utils";

export async function loader({ request }: LoaderArgs) {
  return eventStream(request.signal, function setup(send) {
    function handle(message) {
      send({ event: "newPost", data: message.id });
    }
    console.log("event started");

    emitter.on("newPost", handle);

    return function clear() {
      console.log("event stopped");

      emitter.off("newPost", handle);
    };
  });
}
