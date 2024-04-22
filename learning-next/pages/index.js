import Link from "next/link";
import { useRef, useState } from "react";

const HomePage = () => {

    const [productId, setProductId] = useState('');
    const idTyped = useRef(null);

    const getProduct = () => { 
        console.log(idTyped.current.value);

        return idTyped.current.value;
    }

    const changeId = () => {
        setProductId(idTyped.current.value);
    }


    return(
    <>
        <h1>Home Page</h1>

        <ul>
            <li>
                <Link href="/login">
                    Login Page
                </Link>
            </li> 
            <li>
                <label>Type a Product</label>
                <input id="productField" type="text" ref={idTyped} onChange={changeId}></input>
                
                <Link href={"/product/" + productId}>Go to Product Page</Link>
            </li>
        </ul>
    </>
    )
}

export default HomePage;