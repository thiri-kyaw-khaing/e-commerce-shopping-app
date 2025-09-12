// import type { User } from "@/types";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { AppWindowIcon, CodeIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import UpdateProfile from "@/Pages/auth/UpdateProfile";
// interface UserProps {
//   user: User;
// }
// export default function ProfileAvatar({ user }: UserProps) {
//   return (
//     <>
//       <div className="flex items-center gap-4 mb-24">
//         <Avatar>
//           <AvatarImage src={user.imageUrl} alt="@shadcn" />
//         </Avatar>
//         <span>
//           {user.firstName} {user.lastName}
//         </span>
//       </div>

//       <div className="flex w-full max-w-sm flex-row gap-6 ">
//         <Tabs defaultValue="profile" className="flex-col">
//           <TabsList
//             className="
//           flex w-56 flex-col
//           bg-transparent p-0 text-foreground    /* kill default gray pill */
//         "
//           >
//             {[
//               ["profile", "My Profile"],
//               ["password", "Change Password"],
//               ["history", "Order History"],
//               ["notification", "Notification"],
//               ["logout", "Logout"],
//             ].map(([value, label]) => (
//               <TabsTrigger
//                 key={value}
//                 value={value}
//                 className="
//               w-full justify-start text-left rounded-md px-4 py-2
//               bg-transparent hover:bg-gray-100 shadow-none         /* no base bg */
//               data-[state=active]:bg-gray-500 data-[state=active]:text-white
//               data-[state=active]:border-l-4
//               data-[state=active]:font-semibold
//             "
//               >
//                 {label}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           <div className="flex-1 ml-64 w-full min-w-0 h-full">
//             <TabsContent value="profile" className="flex-row">
//               <div className="h-full rounded-xl border bg-white p-6 overflow-auto">
//                 <UpdateProfile />
//               </div>
//             </TabsContent>
//             <TabsContent value="password">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Password</CardTitle>
//                   <CardDescription>
//                     Change your password here. After saving, you&apos;ll be
//                     logged out.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="grid gap-6">
//                   <div className="grid gap-3">
//                     <Label htmlFor="tabs-demo-current">Current password</Label>
//                     <Input id="tabs-demo-current" type="password" />
//                   </div>
//                   <div className="grid gap-3">
//                     <Label htmlFor="tabs-demo-new">New password</Label>
//                     <Input id="tabs-demo-new" type="password" />
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button>Save password</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </div>
//         </Tabs>
//       </div>
//     </>
//   );
// }

import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="h-[calc(100vh-128px)] w-full px-6 py-4 flex flex-col overflow-hidden">
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar>
          <AvatarImage src="/images/profile3.jpeg" alt="avatar" />
        </Avatar>
        <span className="font-semibold text-lg">Thiri Kyaw Khaing</span>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="profile"
        className="flex-1 flex flex-col overflow-hidden"
      >
        <div className="flex flex-1 w-full overflow-hidden">
          {/* Sidebar Tabs */}
          <TabsList className="w-56 shrink-0 flex flex-col gap-2 p-0 bg-white border rounded-md shadow-sm h-fit">
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
                className="w-full justify-start text-left rounded-md px-4 py-2
                  bg-transparent hover:bg-gray-100
                  data-[state=active]:bg-gray-800 data-[state=active]:text-white
                  data-[state=active]:border-l-4 data-[state=active]:border-black
                  data-[state=active]:font-semibold"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content area */}
          <div className="flex-1 ml-6 overflow-auto">
            <TabsContent value="profile" className="h-full w-full">
              <div className="bg-white p-6 rounded-xl border h-full">
                <Card className="w-full max-w-2xl">
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="h-full w-full">
              <div className="bg-white p-6 rounded-xl border h-full">
                Order history goes here...
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
