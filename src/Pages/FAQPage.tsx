import AccordionFAQ from "@/components/UI components/AccordinaFAQ";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Link } from "react-router-dom";

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

        <div className="mt-6">
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
          <div className="flex gap-4">
            <Link to="#">
              <Button className="w-[150px]">
                <MailIcon /> <h1>Email Support</h1>
              </Button>
            </Link>

            <Link to="#">
              <Button className="w-[150px]" variant={"outline"}>
                <PhoneCallIcon /> <h1>Call Us</h1>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
