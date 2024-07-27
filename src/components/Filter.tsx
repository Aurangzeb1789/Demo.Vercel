import SortBy from "./SortBy";

function Filter() {
    return <>
        <div className="hidden md:block md:w-[12vw]">

            <h6 className="text-gray-400 text-sm my-3">Sort by</h6>
            <div className="">
                <ul className="space-y-2">
                    <SortBy/>
                </ul>
            </div>

        </div>


        <div className="md:hidden mx-4 overflow-hiddens my-3 w-full">
             <details className="dropdown">
                <summary className="btn m-1 w-[80vw] sm:w-[90vw]">Sort By</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                   <SortBy/>
                </ul>
            </details>
        </div>
    </>
}

export default Filter;