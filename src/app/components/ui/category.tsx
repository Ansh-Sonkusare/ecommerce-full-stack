// array of datas to store all the options in the filter
const data = [
  { name: "lens" },
  { name: "cat" },
  { name: "dog" },
  { name: "teaky" },
  { name: "n2" },
  { name: "camera" },
];

function category() {
  return (
    <>
      <div className="font-inter flex flex-row items-center justify-evenly gap-10 border-y-4 border-black p-5 text-[20px]">
        <div>
          <p>NEW</p>
        </div>

        <div>
          <p>STATIONERY</p>
        </div>

        <div>
          <p>ACCESSORIES</p>
        </div>

        <div>
          <p>THEME</p>
        </div>

        <div>
          <p>20% OFF</p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        {/* <div className="pt-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-black ">
            <p className="text-white">SALE</p>
          </div>
        </div> */}

        <div className="grid grid-cols-3 gap-20 p-14 ">
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>

          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
          <div className="h-72 w-72 rounded-lg bg-[#D9D9D9] ">
            <div className="my-60 p-10 pt-10 text-center">
              <p className="text-lg font-semibold">
                PixelPerfect Pro-35 DSLR Camera
              </p>
              <p className="text-gray-500">$48.66 USD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
