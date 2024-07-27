import RelatedProduct from '@/components/RelatedProduct';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

async function getItemById(itemId: number) {
    const itemDetail = await prisma.item.findUnique({

        where: {
            id: itemId
        },
        include: {
            features: true,
            sizes: true,
            colors: true,
        },
    });

    return itemDetail;
}

async function productDetail({ params }: any) {

    const id = parseInt(params.id);
    const detail = await getItemById(id);

    if (!detail) {
        return <p>Item not found</p>
    }

    return <>

        <Suspense fallback={<Loading />}>
          <div className='mx-auto max-w-screen-2xl px-4 lg:px-8'>
                <div className='flex flex-col rounded-lg border border-netural-200 bg-white p-4 h-[auto] lg:p-12 lg:flex-row lg:gap-8 lg:h-[100vh]'>
                    <div className='w-[full] lg:w-[60vw] flex justify-center'>
                        <div className='aspect-square w-[80%] lg:w-[50%]' >
                            <Image src={detail.image} alt={detail.title} width={1280} height={720} />
                        </div>
                    </div>

                    <div className="w-[full] lg:w-[30vw]">
                        <div className="mb-6 flex flex-col border-b pb-6">
                            <h1 className="mb-2 text-4xl font-medium">{detail.title}</h1>
                            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                                <p>${detail.price}<span className="ml-1 inline">USD</span></p>
                            </div>
                        </div>

                        <div>

                            {detail.colors.length === 0 ? null : <> <div>
                                <p className='mb-4 text-sm uppercase tracking-wide'>Colors</p>
                            </div>
                                <div className='grid grid-cols-6 gap-4 mb-5'>
                                    {detail.colors.map((color: any) => (
                                        <button className='border border-neutral-400 text-center rounded-full bg-gray-200 text-xs p-2 hover:border-blue-600 transition-all hover:scale-110 ease-in-out duration-300 '>{color.name}</button>
                                    ))}
                                </div>
                            </>
                            }


                            {detail.sizes.length === 0 ? null : <> <div>
                                <p className='mb-4 text-sm uppercase tracking-wide font-medium'>Size</p>
                            </div>
                                <div className='grid grid-cols-5 gap-4 mb-5'>
                                    {detail.sizes.map((size: any) => (
                                        <button className='border border-neutral-400 text-center rounded-full bg-gray-200 text-xs p-2 hover:border-blue-600 transition-all hover:scale-110 ease-in-out duration-300 '>{size.name}</button>
                                    ))}
                                </div>
                            </>
                            }


                            <div className='my-4'>
                                <p className='text-xs'>{detail.description}</p>
                            </div>

                            {detail.features.length === 0 ? null : <div className='ml-5'>
                                <ul className=' list-disc text-xs'>
                                    {detail.features.map((feature: any) => (
                                        <li className='my-2'>{feature.name}</li>
                                    ))}
                                </ul>
                            </div>
                            }

                            <div className='my-8'>
                                <button className='bg-blue-600 w-[100%] lg:w-[80%] text-white py-3 rounded-full'>Add To Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
               {/* Related Product  */}
            <div className='pt-8 '>
                <h2 className="mb-4 text-2xl font-bold ml-8">Related Products</h2>

                <div className='overflow-x-scroll '>
                    <div className='px-8 mt-2 flex space-x-6'>
                        <RelatedProduct/>
                    </div>
                </div>
            </div>
        </Suspense>
    </>
}

export default productDetail;