import {} from "react";

interface UserAvatarProps {
  className?: string;
}
const UserAvatar = (props: UserAvatarProps) => {
  return (
    <div
      className={`bg-red-400 text-xs w-7 h-7 flex flex-shrink-0 items-center justify-center rounded-full ${props.className}`}
    >
      <p>SE</p>
    </div>
  );
};

export default UserAvatar;
