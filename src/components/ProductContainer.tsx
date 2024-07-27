import Image from "next/image";
import Link from "next/link";

function ProductContainer({posts}:any) {
    return <>
        <div className="w-[full] px-4 md:w-[70vw] min-h-screen my-5">

            {posts.length === 0 ? <p> No Product Found</p> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((item:any) => (
                    <Link href={`/product/${item.id}`}>
                        <div className="relative bg-white border-gray-300 border-[0.5px] rounded-lg hover:border-blue-600 flex items-center justify-center overflow-hidden aspect-square">
                            <div className='hover:scale-105 transition-all ease-in-out duration-200'>
                                <Image src={item.image} width={1920} height={1080} alt={item.title} />
                            </div>
                            <div>
                                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md">
                                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{item.title}</h3>
                                        <p className="flex-none rounded-full bg-blue-600 p-2 text-white">${item.price}
                                            <span className="ml-1">USD</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                ))}
            </div>
            }
        </div>
    </>
}

export default ProductContainer;