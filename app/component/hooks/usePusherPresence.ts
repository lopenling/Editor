import { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { useRevalidator } from "@remix-run/react";

const usePusherPresence = (channelName, id, cluster, fetchUpdateText, user) => {
  const [onlineMembers, setOnlineMembers] = useState([]);
  const { revalidate } = useRevalidator();

  useEffect(() => {
    const pusher = new Pusher(id, {
      cluster,
      authEndpoint: "/auth/pusher", // Replace with your server's auth endpoint
    });
    const channel = pusher.subscribe(channelName);

    const handleSubscriptionSucceeded = () => {
      setOnlineMembers(Object.entries(channel.members.members));
    };

    const handleMemberAdded = (member) => {
      setOnlineMembers(Object.entries(channel.members.members));
    };

    const handleMemberRemoved = (member) => {
      setOnlineMembers(Object.entries(channel.members.members));
    };
    const handleUpdate = (e) => {
      fetchUpdateText();
      revalidate();
    };

    channel.bind("pusher:subscription_succeeded", handleSubscriptionSucceeded);
    channel.bind("pusher:member_added", handleMemberAdded);
    channel.bind("pusher:member_removed", handleMemberRemoved);

    channel.bind("update-app", handleUpdate);
    return () => {
      channel.unbind();
      pusher.unsubscribe(channelName);
    };
  }, [channelName, user.id, revalidate]);
  return { onlineMembers };
};

export default usePusherPresence;
