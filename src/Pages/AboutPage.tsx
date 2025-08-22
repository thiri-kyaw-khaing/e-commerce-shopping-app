import ContactUs from "@/components/UI components/ContactUs";
import FastShippingCard from "@/components/UI components/FastShipping";
import IconCard from "@/components/UI components/PhoneIconCard";
import SecureShippingCard from "@/components/UI components/SecureShopping";
import { PhoneCallIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="space-y-8">
        <h1 className="text-center font-semibold text-2xl">About E-commerce</h1>
        <span className="mt-4 flex text-center justify-center text-gray-600 ">
          Your trusted destination for quality products and exceptional service
        </span>
        <div className="grid grid-cols-2 mt-4 gap-8">
          <div className="space-y-4 p-4">
            <h1 className=" font-semibold text-xl">Our Story</h1>
            <span className="text-gray-600 line-clamp-12">
              Founded in 2020, E-commerce began as a small family business with
              a simple mission: to provide high-quality products at affordable
              prices while delivering exceptional customer service. What started
              as a local store has grown into a trusted online marketplace
              serving customers worldwide.
            </span>
            <span className="text-gray-600 line-clamp-12">
              We believe that shopping should be enjoyable, convenient, and
              secure. That's why we've invested in creating a seamless online
              experience that puts our customers first. From our carefully
              curated product selection to our responsive customer support team,
              every aspect of our business is designed with you in mind.
            </span>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Our Values</h1>
            <h3 className="font-bold text-md mt-4 mb-2">Quality First</h3>
            <span className="text-gray-600">
              We partner with trusted suppliers and rigorously test our products
              to ensure they meet our high standards.
            </span>

            <h3 className="font-bold text-md mt-4 mb-2">
              Customer Satisfication
            </h3>
            <span className="text-gray-600">
              Your happiness is our priority. We offer hassle-free returns and
              dedicated customer support.
            </span>

            <h3 className="font-bold text-md mt-4 mb-2">Innovation</h3>
            <span className="text-gray-600 line-clamp-3">
              We continuously improve our platform and services to provide you
              with the best shopping experience possible.
            </span>
          </div>
        </div>
        <div className="bg-gray-300 rounded-md mt-20 mb-15">
          <h1 className="text-center text-2xl font-semibold p-4">
            Why E-commerce?
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <IconCard />
            <FastShippingCard />
            <SecureShippingCard />
          </div>
        </div>

        <div className="">
          <ContactUs />
        </div>
      </div>
    </>
  );
}
