import Image from "next/image";
function HeroSection() {
  return <>
    <header>
      <div className=" grid md:grid-cols-12 gap-5 mx-4">

        {/* ---------------------------------------------------------T-Shirt Container-----------------------------------------------      */}
        <div className="h-auto border-2 border-gray-300 rounded-md md:row-span-2 md:col-span-8 relative bg-white cursor-pointer hover:border-blue-600">

          <div>
            <Image src={"/t-shirt-1.avif"} alt="T-shirt" width={1920} height={1080} />
          </div>

          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[25%]">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Circles T-Shirt</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$20.00
                <span className="ml-1 hidden">USD</span>
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------Bag Container-------------------------------------------------- */}
        <div className="h-auto md:col-span-4  rounded-md border-2 border-gray-300 relative bg-white cursor-pointer hover:border-blue-600">
          <div>
            <Image src={"/bag-1-dark.avif"} alt="T-shirt" width={1920} height={1080} />
          </div>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Drawstring Bag</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$12.00
                <span className="ml-hidden">USD</span>
              </p>
            </div>
          </div>
        </div>


        {/* ---------------------------------------------Cup Container---------------------------------------------------------- */}

        <div className=" h-auto md:col-span-4  rounded-md border-2 border-gray-300 relative bg-white cursor-pointer hover:border-blue-600">

          <div>
            <Image src={"/cup-black.avif"} alt="T-shirt" width={1920} height={1080} />
          </div>

          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Cup</h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00
                <span className="ml-1">USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}
export default HeroSection;