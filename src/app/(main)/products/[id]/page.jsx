import PageHeader from '@/components/common/page-header'
import React from 'react'
export const metadata = {
	title: {
    absolute:"Free Title"
  },
	description: "Luxury furniture for your comfort",
};


const ProductDetailsPage = ({params}) => {

  return (
    <div>
      <PageHeader title="ABC"/>
      ProductDetails: {params.id}</div>
  )
}

export default ProductDetailsPage