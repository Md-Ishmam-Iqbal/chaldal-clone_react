import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

// import styles

const Product = ({ product }) => {
  return (
    <Card>
        <CardMedia component="img" image={product.image} title={product.name} />
        <CardContent>
            <div>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {product.price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="Add to cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product
