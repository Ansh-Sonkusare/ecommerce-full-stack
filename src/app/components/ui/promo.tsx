import Image from "next/image";

function Promo() {
  return (
    <div className="my-24 flex items-center justify-center">
      <div className="font-inter w-96 rounded-3xl bg-[#FFFCBE] p-8 text-center lg:w-[60%]">
        <div className="flex items-center justify-center gap-40 text-center">
          <Image
            src={"/Party_Popper_Emojipedia.png"}
            alt={"partyhat"}
            height={140}
            width={130}
          />
          <h1 className="font-5xl mb-4 text-[50px] font-medium text-red-500">
            PROMO BANNER
          </h1>
          <div className="-scale-x-100">
            <Image
              src={"/Party_Popper_Emojipedia.png"}
              alt={"partyhat"}
              height={140}
              width={130}
            />
          </div>
        </div>

        <p className="p-8  text-4xl font-light leading-tight text-[#5E5959]">
          Unlock the world of photography with an exclusive offer! Enjoy a
          delightful <span className="text-red-500 underline">20% off</span> on
          your purchases. Simply use code &apos;
          <span className="text-red-500">CAMERA</span>&apos; at checkout and
          capture the moments, seize the savings!
        </p>
      </div>
    </div>
  );
}

export default Promo;
