import AccordionFAQ from "@/components/UI components/AccordinaFAQ";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function FAQPage() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-2xl text-center">
          Frequently Asked Questions
        </h1>
        <span className="flex text-gray-500 justify-center items-center">
          Find answers to common questions about our products and services
        </span>

        <div>
          <AccordionFAQ />
        </div>

        {/* more questions */}
        <div className="flex flex-col border rounded-lg p-4 space-y-4">
          <h1 className="font-semibold"> Still have questions?</h1>
          <span className=" text-gray-500">
            Can't find the answer you're looking for? Our customer support team
            is here to help.
          </span>

          {/* call us buttons */}
          <div className="grid grid-cols-2">
            <Button>
              <MailIcon /> <h1>Email Support</h1>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
