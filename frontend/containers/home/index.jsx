import React from 'react'
import FeaturedSale from '@/components/featured-sale'
import SalesSection from '@/components/sales-section'
import Sales from '../../mocks/sales.json'


function HomeContainer() {
  return (
    <div>
        <FeaturedSale />
        <SalesSection sales={Sales}/>
    </div>
  )
}

export default HomeContainer