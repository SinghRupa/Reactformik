import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import "../product.css";

const Product = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch(error => console.error('Error fetching the products:', error));
    }, []);

    return (
        <div className='container'>
            <h2 className='py-2' style={{ marginTop: "15px", textAlign: "center", textDecoration: "underline", border: "solid", backgroundColor: "lightpink" }}>Product</h2>
            <div className='row'>
                {
                    productData.length > 0 ?  
                    productData.map((ele) => (
                        <div className='col col-sm-12 col-md-6 col-lg-3 my-2' key={ele.id}>
                            <div className='card p-3' style={{ height: "500px" }}>
                                <img src={ele.image} className="card-img-top" alt="..." height={"300px"} style={{ objectFit: "contain" }} />
                                <div className='product-des'>NO :{ele.id} </div>
                                <div className='product-des'>Category : {ele.category}</div>
                                <div className='product-des'>Rating : {ele.rating.rate}</div>
                                <div className='product-des'>Price : Rs.{ele.price}</div>
                                <button className='btn btn-primary mt-3'>ADD TO CART</button>
                            </div>
                        </div>
                    )) : <h5>{"No Data..."}</h5>
                }
            </div>
        </div>
    );
}

export default Product;
