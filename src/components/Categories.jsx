import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/categories"
        })
        .then((res) => {
            console.log(res.data)
            setCategories(res.data)
        })
        .catch((e => console.log(e)))
    }, [])

    const categoryIndex = (i) => {
        while (i < categories.length) {
            return (
                <Grid xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <CardContent>
                        <div>
                            <Typography variant="h5" gutterBottom>
                                {categories[i]}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            );
        }
    }

    
  return (
    <section className='product-categories'>
        <div className="intial-label">Our Product Categories</div>
        <div className="mainTile">
            <a href="http://">Meat and Fish</a>
            <a href="http://">Cooking</a>
            <a href="http://">Beverages</a>
            <a href="http://">Home and Cleaning</a>
        </div>
    </section>
  )
}

export default Categories