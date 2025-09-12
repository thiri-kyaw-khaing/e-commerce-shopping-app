import { siteConfig } from "@/config/site";

import Navigation from "@/components/HeaderComponent/Navigation";

import { SearchBar } from "../ui/searchBar";
import { GetNoti } from "../HeaderComponent/Notification";
import { GetCart } from "../HeaderComponent/Cart";
import AuthDropDown from "../HeaderComponent/AuthDropDown";
import { User } from "@/data/user";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { cartItems } from "@/data/cartItems";
import ProfileButton from "../HeaderComponent/profile";
export default function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container flex items-center h-16 ml-6 mr-3">
        <div className="pl-20 font-bold">E-commerce</div>
        <div className="flex items-center gap-4 flex-1 ml-120">
          <Navigation items={siteConfig.mainNav} />
          <SearchBar />
          <GetNoti />
          <Button className="bg-transparent size-8">
            <Link to="/cart">
              <GetCart items={cartItems} />
            </Link>
          </Button>
          {/* <AuthDropDown user={User} /> */}
          <ProfileButton user={User} />
        </div>
      </nav>
    </header>
  );
}
