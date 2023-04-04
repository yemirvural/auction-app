import React from 'react'
import FeaturedSale from '@/components/featured-sale'
import SalesSection from '@/components/sales-section'
import ProductSlider from '@/components/product-slider'
import ProductFlow from '@/components/product-flow'
import ProductStats from '@/components/product-stats'
import styles from './styles.module.css'

function ProductContainer({ productInfo}) {
  return (
    <div className={styles.productWrapper}>
        <ProductSlider productInfo={productInfo}/>
        <ProductFlow productInfo={productInfo}/>
        <ProductStats productInfo={productInfo}/>
    </div>
  )
}

export default ProductContainer