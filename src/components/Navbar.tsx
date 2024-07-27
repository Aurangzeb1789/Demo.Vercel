import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import Cart from "./Cart";

function Navbar() {
  

    return <>
        <nav>
            <div className="flex items-center justify-between p-4 lg:p-6">

                <div className="md:hidden">
                    {/* Mobile Button  */}
                    <MobileMenu/>
                </div>


                {/* Logo And Nav Menu  */}
                <div className="flex items-center cursor-pointer">
                    {/* Image and Heading */}
                    <div className="border border-neutral-200 p-[10px] rounded-xl">
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-4 w-4 fill-black dark:fill-white"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
                        </Link>
                    </div>
                    <div className="ml-2 font-semibold text-base lg:text-lg"><Link href={"/"}> ACME STORE </Link></div>


                    {/* Nav Links  */}

                    <div className="md:ml-10">
                        <ul className="hidden gap-6 text-sm md:flex md:items-center">
                            <li>
                                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline text-lg" href="/search">All</Link>
                            </li>
                            <li>
                                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline text-lg" href="/search/shirts">Shirts</Link>
                            </li>
                            <li>
                                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline text-lg" href="/search/stickers">Stickers</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Search  */}
                <div className="relative hidden md:block">
                <Search />
                </div>

                {/* Add To bag  */}

                <div className="border border-neutral-200  rounded-xl">
                     <Cart/>
                </div>
            </div>
        </nav>
    </>
}
export default Navbar;






