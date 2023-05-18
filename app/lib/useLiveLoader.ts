import { useLoaderData, useRevalidator } from "@remix-run/react";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useRecoilValue } from "recoil";
import { textInfo } from "~/states";

export function useLiveLoader<T>() {
  const { revalidate } = useRevalidator();
  const [data, setData] = useState();
  const text = useRecoilValue(textInfo);
  useEffect(() => {
    const pusher = new Pusher("73a826d61d515863db4c", {
      cluster: "ap2",
      authEndpoint: "/auth/pusher",
    });
    const channel = pusher.subscribe(`presence-text_${text.id}`);
    let handleUpdate = (e) => {
      setData(e);
    };
    channel.bind("update-app", handleUpdate);
    return () => {
      channel.unbind("update-app");
      pusher.unsubscribe(`presence-text_${text.id}`);
      pusher.disconnect();
    };
  }, []);

  useEffect(() => {
    revalidate();
  }, [data, revalidate]);

  return useLoaderData<T>();
}
