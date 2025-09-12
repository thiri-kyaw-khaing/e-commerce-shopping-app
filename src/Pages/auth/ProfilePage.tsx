import ProfileAvatar from "@/components/HeaderComponent/profileAvatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/data/user";

export default function ProfilePage() {
  return (
    <>
      <ProfileAvatar user={User} />
    </>
  );
}
