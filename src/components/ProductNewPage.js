import React from 'react';
import ProductForm from './ProductForm';
import {Product} from './request';

const ProductNewPage =(props)=>{

    function createProduct(params){
        Product.create(params).then(product=>{
            const id= product.id
            console.log(id)
            props.history.push(`/products/${id}`)
            
        })

    }

return(
    <div>
        <ProductForm createProduct={createProduct}/>
    </div>
)

}

export default ProductNewPage; 