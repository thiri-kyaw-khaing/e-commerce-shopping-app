import type { User } from "@/types";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface UserProps {
  user: User;
}
export default function ProfileAvatar({ user }: UserProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-24">
        <Avatar>
          <AvatarImage src={user.imageUrl} alt="@shadcn" />
          {/* <AvatarFallback>{user.firstName}</AvatarFallback> */}
        </Avatar>
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="profile" className="flex">
          {/* <TabsList className="flex flex-col w-48 space-y-2">
            <TabsTrigger
              value="profile"
              className="justify-start data-[state=active]:bg-gray-500 data-[state=active]:border-l-4  data-[state=active]:font-bold data-[state=active]:text-white rounded-md px-4 py-2 text-left"
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="justify-start data-[state=active]:bg-gray-500 data-[state=active]:border-l-4  data-[state=active]:font-bold data-[state=active]:text-white rounded-md px-4 py-2 text-left"
            >
              Change Password
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="justify-start data-[state=active]:bg-gray-500 data-[state=active]:border-l-4  data-[state=active]:font-bold data-[state=active]:text-white rounded-md px-4 py-2 text-left bg-transparent"
            >
              Order History
            </TabsTrigger>
            <TabsTrigger
              value="notification"
              className="justify-start data-[state=active]:bg-gray-500 data-[state=active]:border-l-4  data-[state=active]:font-bold data-[state=active]:text-white rounded-md px-4 py-2 text-left"
            >
              Notification
            </TabsTrigger>
            <TabsTrigger
              value="logout"
              className="justify-start data-[state=active]:bg-gray-500 data-[state=active]:border-l-4  data-[state=active]:font-bold data-[state=active]:text-white rounded-md px-4 py-2 text-left"
            >
              Logout
            </TabsTrigger>
          </TabsList> */}
          <TabsList
            className="
          flex w-56 flex-col 
          bg-transparent p-0 text-foreground    /* kill default gray pill */
        "
          >
            {[
              ["profile", "My Profile"],
              ["password", "Change Password"],
              ["history", "Order History"],
              ["notification", "Notification"],
              ["logout", "Logout"],
            ].map(([value, label]) => (
              <TabsTrigger
                key={value}
                value={value}
                className="
              w-full justify-start text-left rounded-md px-4 py-2
              bg-transparent hover:bg-gray-100 shadow-none         /* no base bg */
              data-[state=active]:bg-gray-500 data-[state=active]:text-white
              data-[state=active]:border-l-4 
              data-[state=active]:font-semibold
            "
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 ml-64 w-full">
            <TabsContent value="profile" className="flex-row">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-name">Name</Label>
                    <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-username">Username</Label>
                    <Input id="tabs-demo-username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-current">Current password</Label>
                    <Input id="tabs-demo-current" type="password" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-new">New password</Label>
                    <Input id="tabs-demo-new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
