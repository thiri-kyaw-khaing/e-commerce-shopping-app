export default function ContactUs() {
  return (
    <>
      <div className="border rounded-md border-black">
        <h1 className="text-2xl font-bold m-6">Contact Us</h1>
        <div className="grid grid-cols-2 m-6">
          {/* Customer Service */}
          <div className="flex flex-col w-1/2">
            <h3 className="font-semibold">Customer Service</h3>
            <span className="text-gray-400">Email: support@modernshop.com</span>
            <span className="text-gray-400">Phone: +95 (0) 12345456</span>
            <span className="text-gray-400">Hours: 24/7</span>
          </div>
          {/* Business Inquiries */}
          <div className="flex flex-col w-1/2">
            <h3 className="font-semibold">Business Inquiries</h3>
            <span className="text-gray-400">Email: business@ecommerce.com</span>
            <span className="text-gray-400">Phone: +95 (0) 12345456</span>
            <span className="text-gray-400">Hours: Mon-Fri 9AM-6PM GMT</span>
          </div>
        </div>
      </div>
    </>
  );
}
