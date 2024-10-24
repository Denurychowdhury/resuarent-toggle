/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({handleAddToCart}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('cart.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    // console.log(carts);
    return (
        <div className='lg:w-2/3 w-full border-2 p-3'>
            <h1 className='text-4xl font-bold'>Product container</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-2'>
                {
                products.map((product,idx)=><Product key={idx} product={product} handleAddToCart={handleAddToCart}></Product>)
              }
            </div>
        </div>
    );
};

export default Products;