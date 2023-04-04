import React from 'react'
import Sales from '@/mocks/sales.json'
import ProductContainer from '@/containers/product'

function ForSalePage({ params }) {
  console.log(params)
  return (
    <div>
      <ProductContainer />
    </div>
  )
}

export default ForSalePage