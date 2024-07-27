"use client"
import { ImCross } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import Search from "./Search";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MobileMenu() {

    return <>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer" className="">
                    <div className="p-[5px] md:p-[10px] cursor-pointer">
                        <MdMenu className="text-[25px]" />
                    </div>
                </label>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-[100vw] md:w-[400px] p-3 bg-white">

                    <div className="flex justify-start items-center mt-1">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
                            <div className=" cursor-pointer border border-neutral-200 p-[10px] md:p-[20px] rounded-md mr-2"><ImCross /></div>
                        </label>
                    </div>

                    <div className="relative my-6">
                        <Search />
                    </div>

                    <div>
                    <div className="md:ml-10">
                        <ul className="gap-6 text-sm">
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
                </ul>
            </div>
        </div>


    </>
}

export default MobileMenu;