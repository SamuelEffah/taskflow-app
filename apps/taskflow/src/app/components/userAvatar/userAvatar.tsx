import {} from "react";

interface UserAvatarProps {
  className?: string;
}
const UserAvatar = (props: UserAvatarProps) => {
  return (
    <div
      className={`bg-red-400 text-xs flex w-3 h-3 p-[9px] flex-shrink-0 items-center justify-center rounded-full ${props.className}`}
    >
      <p className="text-[10px]">SE</p>
    </div>
  );
};

export default UserAvatar;
