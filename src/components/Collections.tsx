import Link from "next/link";
import CollectionLink from "./CollectionLink";

function Collections() {
    
    
    return <>
        <div className="hidden md:block md:w-[10vw]">

            <h6 className="text-gray-400 text-sm my-3">Collections</h6>
            <div className="">
                <ul className="space-y-2">
                   <CollectionLink/>
                </ul>
            </div>

        </div>

        <div className=" md:hidden mx-4 overflow-hiddens my-3 w-full">

            <details className="dropdown">
                <summary className="btn m-1 w-[80vw] sm:w-[90vw]">Collections</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                   <CollectionLink/>
                </ul>
            </details>
        </div>
    </>
}

export default Collections;