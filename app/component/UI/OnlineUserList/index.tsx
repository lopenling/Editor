import { useEffect, memo } from "react";
import { ReactNotifications } from "react-notifications-component";
type OnlineUsersPropsType = {
  onlineMembers: { id: string; info: { avatarUrl: string } }[];
  count: number;
};
const OnlineUsers = ({ onlineMembers, count }: OnlineUsersPropsType) => {
  if (count < 1) return null;
  return (
    <>
      <ReactNotifications />
      <div className="fixed bottom-2 right-2 p-2 bg-green-200 rounded">
        {onlineMembers && (
          <div className="flex gap-2">
            <div> online: {count}</div>
            <div className="flex -space-x-4">
              {onlineMembers.map(([id, info]) => {
                return (
                  <img
                    key={id}
                    title={info.username}
                    className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                    src={info.avatarUrl}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default memo(OnlineUsers);
