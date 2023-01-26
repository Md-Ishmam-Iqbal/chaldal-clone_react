import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
  
    const changeCateg = categories.map((category) => {
        return (
            <Link to={`/products`}>
                <div className="categoryBox">
                    <div className="categoryName">
                        {category}
                    </div>
                    <div className="categoryImg"> 
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className="mainContainer">
            <section className='product-categories'>
                <div className="intialLabel">
                    <h2>
                        <span></span>
                        <span>
                            Our Product Categories
                        </span>
                        <span></span>
                    </h2>
                </div>
                <div className="mainTile">
                    {changeCateg}
                    {changeCateg}
                    {changeCateg}
                </div>
            </section>
        </div>
    )
}

export default Categories