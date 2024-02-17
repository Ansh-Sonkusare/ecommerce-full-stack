import Image from "next/image";

function Title() {
  return (
    <div className="mt-24 flex justify-center px-48">
      <div className=" flex w-full justify-between ">
        <div className="mt-15 flex flex-col items-start justify-center">
          <h1 className="font-inter text-left text-[650%] font-normal">
            Camera
          </h1>
          <p className="font-kdam-thmor text-543131 mb-4 text-left text-2xl">
            we guarantee to bring the best quality <br />
            cameras for your needs.{" "}
          </p>
          <button className="mt-4 h-16 w-80 rounded-xl border border-black bg-black px-4 py-2 text-2xl text-white hover:bg-white hover:text-black hover:underline">
            Shop now
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-14">
          <div className="grid grid-cols-1 gap-10">
            <Image
              src={"/Hero/cam1.png"}
              alt={"whitecamera"}
              height={280}
              width={360}
            ></Image>
            <Image
              src={"/Hero/cam4.png"}
              alt={"lenscamera"}
              height={210}
              width={260}
            ></Image>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="mr-20">
              <Image
                src={"/Hero/cam2.png"}
                alt={"blackcamera"}
                height={210}
                width={260}
              ></Image>
            </div>
            <Image
              src={"/Hero/cam3.png"}
              alt={"sidecamera"}
              height={280}
              width={360}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
