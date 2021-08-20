import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function HomePage(props) {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        async function getProducts() {
            let products = await axios.get("/api/")
            setProductsList(products.data.data)
            // console.log(products.data.data)

        }
        console.log(productsList)
        getProducts()
    },[])

    async function createProduct(e) {
        e.preventDefault()

        try{
            let createForm = document.getElementById("formData")
            let formData = new FormData(createForm)

            let productData = {
                name: formData.get('name'),
                price: formData.get('price'),
                image: formData.get('image'),
                description: formData.get('description')
            }

            await axios.post("/api/products",productData)
        } catch (e) {
            console.log(e.response.data)
        }

    }
    return (
        <div>
            <Container>
                <div>Add new product below</div>
                <Form onSubmit={createProduct} id="formData">
                    <Row>
                        <label>Name</label>
                        <Form.Control type="text" name="name" />
                    </Row>
                    <Row>
                        <label>Price</label>
                        <Form.Control type="text" name="price" />
                    </Row>
                    <Row>
                        <label>Image Link</label>
                        <Form.Control type="text" name="image" />
                    </Row>
                    <Row>
                        <label>Description</label>
                        <Form.Control type="text" name="description" />
                    </Row>

                    <Row>
                        <button className="btn" type="submit">Add Product</button>
                    </Row>
                </Form>

            </Container>

            <h4>Products</h4>
            <Row>
                { productsList.map(productItem => (
                    <Col md={3} key={productItem._id}>
                        <Card>
                            <Card.Img src={productItem.image} alt={"http://placehold.it/300x300"}/>
                            <Card.Body>
                                <Card.Title>{productItem.name}</Card.Title>
                                <Card.Subtitle className="mb-2">{productItem.description}</Card.Subtitle>

                                <div className="d-flex justify-content-between">
                                    <div className={"text-success"}>S$ {productItem.price}</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <NavLink to={`/products/${productItem._id}`}>
                            View/Edit
                        </NavLink>
                    </Col>

                ))}

            </Row>
        </div>
    );
}

export default HomePage;