import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

function Product(props) {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getProduct() {
            let productDetails = await axios.get(`/api/products/${id}`)
            // setProduct(.data.data)
            console.log(productDetails.data.data)

        }

        getProduct()
    },[])
    return (
        <div>test</div>
    );
}

export default Product;