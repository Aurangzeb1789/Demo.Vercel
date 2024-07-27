import Link from "next/link";

function Footer() {
    return <>
        <footer className="text-sm text-neutral-500">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
                <div>
                    <Link className="flex items-center gap-2 text-black md:pt-1" href="/">
                        <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white h-[30px] w-[30px] rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white h-[10px] w-[10px]">
                                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                            </svg>
                        </div>
                        <span className="uppercase">Acme Store</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm text-black" href="/">Home</Link>
                        </li>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/about">About</Link></li>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/terms-conditions">Terms &amp; Conditions</Link>
                        </li>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/shipping-return-policy">Shipping &amp; Return Policy</Link>
                        </li>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/frequently-asked-questions">FAQ</Link>
                        </li>
                    </ul>
                </nav>
                <div className="md:ml-auto">
                    <Link className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black" href="https://vercel.com/templates/next.js/nextjs-commerce">
                        <span className="px-3">▲</span>
                        <hr className="h-full border-r border-neutral-200" />
                        <span className="px-3">Deploy</span></Link>
                </div>
            </div>
            <div className="border-t border-neutral-200 py-6 text-sm">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>© All rights reserved.</p>
                    <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p>Designed in California</p>
                    <p className="md:ml-auto"><Link href="https://vercel.com" className="text-black">
                        Crafted by ▲ Vercel</Link>
                    </p>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;