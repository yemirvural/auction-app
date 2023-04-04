import React from 'react'
import FeaturedSale from '@/components/featured-sale'
import SalesSection from '@/components/sales-section'
import Sales from '../../mocks/sales.json'
import ProductSlider from '@/components/product-slider'
import ProductFlow from '@/components/product-flow'
import ProductStats from '@/components/product-stats'
import styles from './styles.module.css'

function ProductContainer() {
  return (
    <div className={styles.productWrapper}>
        <ProductSlider />
        <ProductFlow />
        <ProductStats />
    </div>
  )
}

export default ProductContainer