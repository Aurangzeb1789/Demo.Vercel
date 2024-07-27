"use client"
import { useRouter } from "next/router";
import CollectionLink from "./CollectionLink";
import { useEffect, useState } from "react";

function Collections() {



    const router = useRouter();
    const [summaryText, setSummaryText] = useState("Collections");

    useEffect(() => {
        // Make sure we're running this code only on the client side
        if (typeof window !== "undefined") {
            const path = router.asPath.split("/")[2]; // Extract the part after "/search/"
            if (path) {
                setSummaryText(path.charAt(0).toUpperCase() + path.slice(1)); // Capitalize the first letter
            } else {
                setSummaryText("Collections");
            }
        }
    }, [router.asPath]);
    
    
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
                <summary className="btn m-1 w-[80vw] sm:w-[90vw]">{summaryText}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                   <CollectionLink/>
                </ul>
            </details>
        </div>
    </>
}

export default Collections;