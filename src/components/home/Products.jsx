import React from 'react';
import products from '@/data/toys.json'
import ProductCard from '../cards/ProductCard';

const Products = () => {
    return (
        <>
            <div className='py-10 sm:py-15 lg:py-20'>
                <div className='container'>
                    <h2 className='text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold'>Ours Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            products.map(product => (
                                <ProductCard key={product.title} product={product}></ProductCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;