import {useRouter} from "next/router"

const ProductPage = () => {
    const product = useRouter();
    
    const {id} = product.query;

    return(
    <>
        <h1>Product {id}</h1>
    </>
    )
}

export default ProductPage;