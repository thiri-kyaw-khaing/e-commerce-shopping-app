import type { User } from "@/types";
import { Avatar, AvatarImage } from "../ui/avatar";
interface UserProps {
  user: User;
}
export default function ProfileAvatar({ user }: UserProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={user.imageUrl} alt="@shadcn" />
        {/* <AvatarFallback>{user.firstName}</AvatarFallback> */}
      </Avatar>
      <span>
        {user.firstName} {user.lastName}
      </span>
    </div>
  );
}
