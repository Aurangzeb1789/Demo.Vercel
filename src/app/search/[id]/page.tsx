import { prisma } from '@/lib/prisma';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import ProductContainer from '@/components/ProductContainer';

async function getItemsByCategory(categoryName: string, sortField: any, sortDirection: any) {
    const items = await prisma.item.findMany({
        where: {
            categories: {
                some: {
                    name: categoryName,
                },
            },
        },
        include: {
            features: true,
            sizes: true,
            colors: true,
        },

        orderBy: {
            [sortField]: sortDirection, // or 'desc' for descending order
        },

    });

    return items;
}

async function ProductFilter({ params, searchParams }: any) {

    const value = params.id;

    const sortField = searchParams.sortField
    const sortDirection = searchParams.sortDirection
    const posts = await getItemsByCategory(value, sortField, sortDirection);



    return <>
        <Suspense fallback={<Loading />}>
            <ProductContainer posts={posts} />
        </Suspense>
    </>
}

export default ProductFilter;




