import Image from "next/image";

function RelatedProduct()
{
    return <>
               <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%]  bg-white">
                        <Image src={"/hoodie-1.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Baby Onesie</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>

                <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%] flex-shrink-0 bg-white">
                        <Image src={"/baby-cap-black.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Baby Cap</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>

                <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%] flex-shrink-0 bg-white">
                        <Image src={"/baby-onesie-beige-1.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Baby OneSie Beige</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$10.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>

                <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%] flex-shrink-0 bg-white">
                        <Image src={"/bag-1-dark.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Bag</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$12.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>

                <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%] flex-shrink-0 bg-white">
                        <Image src={"/cup-black.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Cup Black</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>

                <div className=" w-[300px] h-[200px] cursor-pointer hover:border-blue-600 border-2 lg:w-[500px] lg:h-[250px] flex justify-center rounded-lg bg-white flex-shrink-0 relative">
                    <div className="text-white w-[50%] flex-shrink-0 bg-white">
                        <Image src={"/mug-1.avif"} alt="hoodie" width={1920} height={1080} />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 z-10">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md "><h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme Mug</h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">$15.00
                                <span className="ml-1">USD</span></p>
                        </div>
                    </div>
                </div>
    </>
}

export default RelatedProduct;