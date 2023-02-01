import React from 'react'
import { Grid } from "@mui/material"
import Product from '../components/Products/Product/Product'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const {category} = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
        .then((res)=> {
            setProducts(res.data);
        })
        .catch((e) => console.log(e))
    }, [category]);

    return (
        <main>
            <Grid container justify="center">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} /> 
                        {/* product as props required for product.name */}
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


export default Products