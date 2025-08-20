import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Link,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GenderDropdown } from "../ui/GenderChoose";
import { Calendar28 } from "../ui/date-picker";
import { TextareaWithLabel } from "../ui/TextAreaAddress";

export function CreateAcc({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center mb-6">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-gray-200"
                  required
                />
              </div>

              <div className="flex flex-row gap-6">
                <GenderDropdown />
                <Calendar28 />
              </div>
              <TextareaWithLabel />
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" asChild>
                  <Link to="/">Get Started</Link>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
