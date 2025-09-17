import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import type { MainNavItem } from "@/types";
import { Link, NavLink } from "react-router-dom";
interface NavigationProps {
  items: MainNavItem[];
}
export default function NavBar({ items }: NavigationProps) {
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-muted rounded-xl">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex justify-evenly w-full bg-gray-400 rounded-xl py-3 gap-4 px-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[0].title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/admin/products"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[1].title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[2].title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[3].title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[4]?.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[5]?.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `${navigationMenuTriggerStyle()} ${
                        isActive
                          ? "bg-white text-black rounded-xl"
                          : "bg-gray-400 text-black  rounded-xl"
                      }`
                    }
                  >
                    {items[6]?.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
