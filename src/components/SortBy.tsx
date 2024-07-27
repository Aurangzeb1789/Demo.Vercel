import Link from "next/link";

function SortBy()
{
    return <>
               <li>
                        <Link className="text-black underline-offset-4  hover:text-black hover:underline text-base font-medium" href="/search">Relevance</Link>
                    </li>

                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href={{ query: { sortField: 'no_of_times_bought', sortDirection: 'desc' } }}>Trending</Link>
                    </li>

                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href={{ query: { sortField: 'id', sortDirection: 'asc' } }}>Latest arrivals</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href={{ query: { sortField: 'price', sortDirection: 'asc' } }}>Price: Low to high</Link>
                    </li>

                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href={{ query: { sortField: 'price', sortDirection: 'desc' } }}>Price: High to Low</Link>
                    </li>
    </>
}

export default SortBy;