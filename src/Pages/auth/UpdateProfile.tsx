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
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import UpdateDateOfBirth from "@/components/UI components/updateDateOfBirth";
import { TextareaWithLabel } from "@/components/ui/TextAreaAddress";

// const profileFormSchema = z.object({
//   fullname: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
// });

// const form = useForm<z.infer<typeof profileFormSchema>>({
//   resolver: zodResolver(profileFormSchema),
//   defaultValues: {
//     fullname: "",
//     email: "",
//   },
// });

// function onSubmit(values: z.infer<typeof profileFormSchema>) {
//   console.log(values);
//   // setLoading(true);
//   // Call api
// }
export default function UpdateProfile() {
  return (
    <div>
      {/* <Card className="w-full h-full mt-6"> */}
      <CardHeader>
        <CardTitle className="text-xl font-semibold">My Profile</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullname" className="mt-4">
            Full Name
          </Label>
          <Input id="fullname" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <RadioGroup defaultValue="male" className="flex gap-4 mt-4 ml-1">
        <div className="flex gap-2 items-center space-x-2 ml-6 mt-4">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male">Male</Label>
        </div>
        <div className="flex items-center space-x-2 ml-6 mt-4">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female">Female</Label>
        </div>
        <div className="flex items-center space-x-2 ml-6 mt-4">
          <RadioGroupItem value="other" id="other" />
          <Label htmlFor="other">Other</Label>
        </div>
      </RadioGroup>
      <div className="mt-6 ml-6 w-2/5">
        <UpdateDateOfBirth />
      </div>
      <div className="mt-6 ml-6 w-3/5">
        <TextareaWithLabel />
      </div>
      <CardFooter className="flex justify-end mt-4">
        <Button>Save changes</Button>
      </CardFooter>
      {/* </Card> */}
    </div>
  );
}
