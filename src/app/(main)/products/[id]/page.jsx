import PageHeader from '@/components/common/page-header'
import React from 'react'

const ProductDetailsPage = ({params}) => {

  return (
    <div>
      <PageHeader title="ABC"/>
      ProductDetails: {params.id}</div>
  )
}

export default ProductDetailsPage