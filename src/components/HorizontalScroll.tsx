import RelatedProduct from "./RelatedProduct";

function HorizontalScroll() {
    return <>
        <div className=" overflow-x-scroll loop">
            <div className=" animate-scroll p-4 flex space-x-6">
                <RelatedProduct/>

            </div>
        </div>
    </>
}

export default HorizontalScroll;