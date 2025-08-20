import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Address</Label>
      <Textarea
        className="bg-gray-200"
        placeholder="Type your message here."
        id="message"
      />
    </div>
  );
}
