import React from 'react'
import FeaturedSale from '@/components/featured-sale'
import SalesSection from '@/components/sales-section'
import Sales from '../../mocks/sales.json'


function HomeContainer({remainingTime, productInfo}) {
  return (
    <div>
        <FeaturedSale remainingTime={remainingTime} productInfo={productInfo}/>
        <SalesSection sales={Sales}/>
    </div>
  )
}

export default HomeContainer