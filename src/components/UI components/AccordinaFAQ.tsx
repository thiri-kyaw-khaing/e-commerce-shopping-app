import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionFAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-4"
      defaultValue="item-1"
    >
      <div className="border rounded-lg p-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance  text-gray-500">
            <p>
              We offer a 30-day return policy for all items in original
              condition with receipt.
            </p>
          </AccordionContent>
        </AccordionItem>
      </div>
      <div className="border rounded-lg p-4">
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance  text-gray-500">
            <p>
              Standard shipping takes 3-5 business days. Express shipping is
              available for 1-2 days.
            </p>
          </AccordionContent>
        </AccordionItem>
      </div>

      <div className="border rounded-lg p-4">
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do you offer international shipping?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance  text-gray-500">
            <p>
              Yes, we ship to most countries worldwide. Shipping costs and times
              vary by location.
            </p>
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
}
