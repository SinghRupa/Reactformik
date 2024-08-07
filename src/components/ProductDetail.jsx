import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../product.css";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState('');

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    return (
        <div className='container'>
            {product ? (
                <div className='product-detail'>
                    <img  src={product.image} alt={product.title} height={"300px"} style={{ objectFit: "contain"}} />
                    <p className='product-des'>ID : {product.id}</p>
                    <p className='product-des'>Title : {product.title}</p>
                    <p className='product-des'>Category : {product.category}</p>
                    <p className='product-des'>Rating : {product.rating?.rate}</p>
                    <p className='product-des'>Price : Rs.{product.price}</p>
                    <p className='product-des'>Description :{product.description}</p>
                </div>
                ) : ( 
                        <p>Loading..</p>
                )
            }
        </div>
    );
}

export default ProductDetail;
