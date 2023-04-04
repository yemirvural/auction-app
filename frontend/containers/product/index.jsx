import React from 'react'
import FeaturedSale from '@/components/featured-sale'
import SalesSection from '@/components/sales-section'
import ProductSlider from '@/components/product-slider'
import ProductFlow from '@/components/product-flow'
import ProductStats from '@/components/product-stats'
import styles from './styles.module.css'

function ProductContainer({ productInfo, remainingTime}) {
  return (
    <div className={styles.productWrapper}>
        <ProductSlider productInfo={productInfo}/>
        <ProductFlow productInfo={productInfo} remainingTime={remainingTime}/>
        <ProductStats productInfo={productInfo} remainingTime={remainingTime}/>
    </div>
  )
}

export default ProductContainer