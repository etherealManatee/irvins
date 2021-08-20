import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Form, Row} from "react-bootstrap";

function Product(props) {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getProduct() {
            let productDetails = await axios.get(`/api/products/${id}`)

            // console.log(productDetails.data.data)
            setProduct(productDetails.data.data)
        }

        getProduct()
    },[])

    async function updateProduct(e) {
        e.preventDefault()

        try{
            let createForm = document.getElementById("formData1")
            let formData = new FormData(createForm)

            let productData = {
                name: formData.get('name'),
                price: formData.get('price'),
                image: formData.get('image'),
                description: formData.get('description')
            }

            await axios.post(`/api/products/${id}`,productData)
        } catch (e) {
            console.log(e.response.data)
        }

    }

    return (
        <div>
            <h4>Single Product View</h4>
            <Form onSubmit={updateProduct} id="formData1">
                <Row>
                    <label>Name</label>
                    <Form.Control type="text" name="name" value={product.name}/>
                </Row>
                <Row>
                    <label>Price</label>
                    <Form.Control type="text" name="price" value={product.price} />
                </Row>
                <Row>
                    <label>Image Link</label>
                    <Form.Control type="text" name="image" value={product.image} />
                </Row>
                <Row>
                    <label>Description</label>
                    <Form.Control type="text" name="description" value={product.description} />
                </Row>

                <Row>
                    <button className="btn" type="submit">Update Product</button>
                </Row>
            </Form>
        </div>
    );
}

export default Product;