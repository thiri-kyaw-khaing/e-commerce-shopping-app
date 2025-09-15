import ProfileButton from "@/components/HeaderComponent/profile";
import { Separator } from "@/components/ui/separator";
import { User } from "@/data/user";

export default function Header() {
  return (
    <>
      <header className="w-full border-b">
        <div className="flex justify-between items-center flex-1 pr-20 h-16">
          <div className="pl-20 font-bold">E-commerce</div>
          <ProfileButton user={User} />
        </div>
      </header>
    </>
  );
}
