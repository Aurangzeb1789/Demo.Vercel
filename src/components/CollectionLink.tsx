import Link from "next/link";

function CollectionLink()
{
    return <>
              <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search">All</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/bags">Bags</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/drinkware">Drinkware</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/footware">Footware</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/headwear">Headwear</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/hoodies">Hoodies</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/jackets">Jackets</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/kids">Kids</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/pets">Pets</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/shirts">Shirts</Link>
                    </li>
                    <li>
                        <Link className="text-black underline-offset-4 hover:text-black hover:underline text-base font-medium" href="/search/stickers">Stickers</Link>
                    </li>
    </>
}

export default CollectionLink;