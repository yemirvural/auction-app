import React from 'react'
import sales from '@/mocks/sales.json'
import ProductContainer from '@/containers/product'

function ForSalePage({ params }) {
  const item = sales.results.find(item => item.id === Number(params.id));
  return (
    <div>
      <ProductContainer productInfo={item} />
    </div>
  )
}

export default ForSalePage