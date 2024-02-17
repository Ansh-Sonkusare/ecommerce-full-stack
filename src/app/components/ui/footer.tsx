import Image from "next/image";

function Footer() {
  return (
    <div className="justify-centre px-30 mb-2 mt-6 flex border-t-2 pt-4">
      <div className="flex w-full items-center justify-between px-10">
        <div className="flex gap-6">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-6">
          <input
            type="email"
            className=" h-10 rounded  border-2  border-gray-300 px-3 text-sm  text-gray-700 focus:outline-none "
            placeholder="user@mail.com"
          />
          <button className="h-10 rounded-lg bg-[#2F2E2E] px-4 py-2 text-white">
            Subscribe
          </button>
          <Image
            src={"/Footer/facebook-logo-498.jpg"}
            alt={"facebook"}
            height={40}
            width={40}
            className="h-10"
          ></Image>
          <Image
            src={"/Footer/logo-ig-png-32464.png"}
            alt={"instagram"}
            height={40}
            width={40}
            className="h-10"
          ></Image>
          <Image
            src={"/Footer/logo-twitter-png-5860.png"}
            alt={"twitter"}
            height={40}
            width={40}
            className="h-10"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Footer;
