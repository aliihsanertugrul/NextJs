import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductList from '@/components/products/product-list';
import { config } from '@/utils/config';
import React from 'react'
export const metadata = {
	title: "Products",
	description: "Luxury furniture for your comfort",
};

const ProductsPage = async () => {
  const res=await fetch(`${config.apiURL}/products`);
  const products=await res.json()
  // console.log(products)


  return (
    <div>
      <PageHeader title="Products"/>
      <Spacer height={50}/>
      <ProductList products={products}/>
      <Spacer height={50}/>
      
    </div>
  )
}

export default ProductsPage