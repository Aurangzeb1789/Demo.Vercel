import { ImCross } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

function Cart() {
    return <>
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-4" className="">
                <div className="p-[5px] md:p-[10px] cursor-pointer">
                <IoCartOutline className="text-[25px]" />
                </div>  
                </label>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-[100vw] md:w-[400px] p-3 bg-white">

                    <div className="flex justify-between items-center mt-6">
                        <div className=" font-bold text-xl">My Cart</div>
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
                            <div className=" cursor-pointer border border-neutral-200 p-[10px] md:p-[20px] rounded-md mr-2"><ImCross /></div>
                        </label>
                    </div>

                       <div className="flex justify-center items-center flex-col h-[90vh]">

                        <div className=" my-5">   
                           <FaCartShopping className="text-[80px]"/>
                       </div>
                       <p className="text-base">Your Cart Is Empty</p>

                       </div>


                </ul>
            </div>
        </div>


    </>
}

export default Cart;