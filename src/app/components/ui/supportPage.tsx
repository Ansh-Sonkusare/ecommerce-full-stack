import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
function Support() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-inter mb-4 mt-20 text-center text-3xl font-bold"></h2>
      <div className="grid auto-cols-max gap-40  lg:grid-cols-2">
        <div className="mt-6 flex h-auto w-[80%] flex-col items-center  border-2  border-black bg-white  lg:w-[450px] ">
          <h2 className="font-inter relative -top-6   bg-white px-6 text-center text-3xl">
            Timely Delivery
          </h2>
          <div className=" flex h-full flex-col items-center justify-evenly">
            <Image
              src={"/Services/truck.png"}
              alt={"truck"}
              height={210}
              width={260}
            />
            <p className=" px-8 pb-6 text-center text-lg font-[400] text-[#7D7D7D]">
              We guarantee the timely dispatch of your order, with a commitment
              to meeting specified delivery timelines. In the event of any
              unforeseen delays, we'll keep you informed and work diligently to
              expedite the process.
            </p>
          </div>
        </div>
        <div className="mt-6 flex h-auto w-[80%] flex-col items-center  border-2  border-black bg-white  lg:w-[450px] ">
          <h2 className="font-inter relative -top-6   bg-white px-6 text-center text-3xl">
            Secure Package
          </h2>
          <div className="flex h-full flex-col items-center justify-evenly">
            <Image
              src={"/Services/package.png"}
              alt={"truck"}
              height={210}
              width={260}
            />
            <p className=" px-8 pb-6 text-center text-lg font-[400] text-[#7D7D7D]">
              Your camera products will be packaged with the utmost care to
              prevent any damage during transit. We use industry-standard
              packaging materials and techniques to safeguard your valuable
              equipment.
            </p>
          </div>
        </div>
        <div className="mt-6 flex h-auto w-[80%] flex-col items-center  border-2  border-black bg-white  lg:w-[450px] ">
          <h2 className="font-inter relative -top-6   bg-white px-6 text-center text-3xl">
            Track and Trace
          </h2>
          <div className="flex h-full flex-col items-center justify-evenly">
            <Image
              src={"/Services/locomotion.png"}
              alt={"truck"}
              height={210}
              width={260}
            />
            <p className=" px-8 pb-6 text-center text-lg font-[400] text-[#7D7D7D]">
              Stay informed about your shipment's journey with our comprehensive
              tracking system. You'll receive real-time updates on the status
              and location of your order, ensuring transparency and peace of
              mind.
            </p>
          </div>
        </div>
        <div className="mt-6 flex h-auto w-[80%] flex-col items-center  border-2  border-black bg-white  lg:w-[450px] ">
          <h2 className="font-inter relative -top-6   bg-white px-6 text-center text-3xl">
            Customer Support
          </h2>
          <div className="flex h-full flex-col items-center justify-evenly">
            <Image
              src={"/Services/customer-support.png"}
              alt={"truck"}
              height={180}
              width={230}
            />
            <p className=" px-8 pb-6 text-center text-lg font-[400] text-[#7D7D7D]">
              Our dedicated customer support team is ready to assist you with
              any shipping-related inquiries. Feel free to reach out if you have
              questions about your order, delivery status, or any other
              concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
