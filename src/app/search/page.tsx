import { prisma } from '@/lib/prisma';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import ProductContainer from '@/components/ProductContainer';


async function getAllItems(searchTerm: string, sortField: any, sortDirection: any) {
    const post = await prisma.item.findMany({
        where: {
            title: {
                contains: searchTerm,
            },
        },
        include: { features: true, sizes: true, colors: true, },
        orderBy: {
            [sortField]: sortDirection, // or 'desc' for descending order
        },
    });
    return post;
}

async function Search({ searchParams }: any) {

    const sortField = searchParams.sortField
    const sortDirection = searchParams.sortDirection
    const searchTerm = searchParams.q || ''
    const posts = await getAllItems(searchTerm, sortField, sortDirection)

    return <>
        <Suspense fallback={<Loading />}>
            <ProductContainer posts={posts} />
        </Suspense>
    </>
}

export default Search;


