import { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { useRevalidator } from "@remix-run/react";

const usePusherPresence = (channelName, id, cluster) => {
  const [onlineCount, setOnlineCount] = useState(0);
  const [onlineMembers, setOnlineMembers] = useState([]);
  const revalidator = useRevalidator();
  useEffect(() => {
    const pusher = new Pusher(id, {
      cluster,
      authEndpoint: "/auth/pusher", // Replace with your server's auth endpoint
    });

    const channel = pusher.subscribe(channelName);

    const handleSubscriptionSucceeded = () => {
      setOnlineCount(channel.members.count);
      setOnlineMembers(Object.entries(channel.members.members));
    };

    const handleMemberAdded = () => {
      setOnlineCount(channel.members.count);
      setOnlineMembers(Object.entries(channel.members.members));
    };

    const handleMemberRemoved = () => {
      setOnlineCount(channel.members.count);
      setOnlineMembers(Object.entries(channel.members.members));
    };
    const handleUpdate = () => {
      revalidator.revalidate();
    };
    channel.bind("pusher:subscription_succeeded", handleSubscriptionSucceeded);
    channel.bind("pusher:member_added", handleMemberAdded);
    channel.bind("pusher:member_removed", handleMemberRemoved);

    channel.bind("update-app", handleUpdate);
    return () => {
      channel.unbind();
      pusher.unsubscribe(channelName);
    };
  }, [channelName]);

  return { onlineCount, onlineMembers };
};

export default usePusherPresence;
