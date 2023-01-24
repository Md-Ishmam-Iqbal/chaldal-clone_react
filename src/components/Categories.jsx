import axios from 'axios'
import React, { useState, useEffect } from 'react'


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

    // const categoryIndex = () => {
    //     for (i = 0, i <= (categories.length), i++) {
    //         return (
    //             "<a>{categories[i]}/a>"
    //         );
    //     };

    
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
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[0]}
                        </div>
                        <div className="categoryImg">
                            
                        </div>
                    </div>
                </a>
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[1]}
                        </div>
                        <div className="categoryImg">

                        </div>
                    </div>
                </a>
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[2]}
                        </div>
                        <div className="categoryImg">

                        </div>
                    </div>
                </a>
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[3]}
                        </div>
                        <div className="categoryImg">

                        </div>
                    </div>
                </a>
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[0]}
                        </div>
                        <div className="categoryImg">

                        </div>
                    </div>
                </a>
                <a href="http://">
                    <div className="categoryBox">
                        <div className="categoryName">
                            {categories[1]}
                        </div>
                        <div className="categoryImg">

                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Categories