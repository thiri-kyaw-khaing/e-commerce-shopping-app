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
import { Link } from "react-router-dom";
interface NavigationProps {
  items: MainNavItem[];
}
export default function NavBar({ items }: NavigationProps) {
  return (
    <>
      <div className="container mx-auto">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex justify-evenly w-full bg-muted rounded-xl py-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[0].title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[1]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[2]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[3]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[4]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[5]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="#">{items[6]?.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
