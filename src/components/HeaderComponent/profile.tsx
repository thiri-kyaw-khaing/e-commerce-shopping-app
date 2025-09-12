import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { User } from "@/types";

interface UserProps {
  user: User;
}

export default function ProfileButton({ user }: UserProps) {
  return (
    <>
      <Button variant="ghost" className="size-10 rounded-full bg-transparent">
        <Link to="/profile">
          <Avatar>
            <AvatarImage src={user.imageUrl} alt="@shadcn" />
            {/* <AvatarFallback>{user.firstName}</AvatarFallback> */}
          </Avatar>
        </Link>
      </Button>
    </>
  );
}
