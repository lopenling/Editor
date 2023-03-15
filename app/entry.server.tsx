import type { EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { renderToReadableStream, renderToString } from "react-dom/server";
import isbot from "isbot";
const ABORT_DELAY = 10000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let didError = false;

  const stream = await renderToReadableStream(
    <RemixServer
      context={remixContext}
      url={request.url}
      abortDelay={ABORT_DELAY}
    />,
    {
      onError: (error) => {
        didError = true;
        console.error(error);
      },
      // signal: AbortSignal.timeout(ABORT_DELAY),
    }
  );

  if (isbot(request.headers.get("user-agent"))) {
    await stream.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");

  return new Response(stream, {
    headers: responseHeaders,
    status: didError ? 500 : responseStatusCode,
  });
}
