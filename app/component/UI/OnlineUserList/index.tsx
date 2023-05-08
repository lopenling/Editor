type OnlineUsersPropsType = {
  onlineMembers: { id: string; info: { avatarUrl: string } }[];
  count: number;
};

const OnlineUsers = ({ onlineMembers, count }: OnlineUsersPropsType) => {
  return (
    <div className="fixed bottom-0 right-0 mx-2 my-2">
      {onlineMembers && (
        <div className="flex gap-2">
          <div> current online: {count}</div>
          <div className="flex mb-5 -space-x-4">
            {onlineMembers.map(([id, info]) => {
              return (
                <img
                  key={id}
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
  );
};
export default OnlineUsers;
