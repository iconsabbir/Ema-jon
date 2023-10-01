import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Teshart from '../Teshart/Teshart';
import './Prodect.css';


const Prodect = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <div className='item-containe'>
                {
                    products.map(product =><Teshart
                    
                        key={product.id}
                        product={product}
                
                    ></Teshart>
                        
                          )
                }
            </div>
        </div>
    );
};

export default Prodect;