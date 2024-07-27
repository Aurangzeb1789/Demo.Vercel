"use client"
import { useRouter } from 'next/navigation';

function Search() {
    const router = useRouter();
    const handleSearch = (event: any) => {
        if (event.key === 'Enter') {
            router.push(`/search?q=${event.target.value}`);
            event.target.value = "";
        }
    }

    return <>

        <div className="md:w-[30vw]">
            <input type="text" placeholder="Search for products..." className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 lowercase" onKeyDown={handleSearch} />
        </div>
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
        </div>



    </>
}

export default Search;