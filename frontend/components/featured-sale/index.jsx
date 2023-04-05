import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

function FeaturedSale({remainingTime, productInfo}) {
  return (
    <div className={styles.saleWrapper}>
      <div className={styles.saleHeader}>
        <h3 className={styles.saleTitle}>{productInfo.title} on Auction!</h3>
        <span className={styles.saleTimer}>
          {remainingTime.loaded ? 
            (remainingTime.diff > 0 ? (`${remainingTime.days}:${remainingTime.hours}:${remainingTime.minutes}:${remainingTime.seconds} time left`) : "Auction closed!")
            :
            'Loading...'
          }
        </span>
      </div>
      <div className={styles.saleBody}>
        <div className={styles.itemPhoto}>
          <img src={productInfo.image_path}></img>
        </div>
        <div className={styles.itemDetail}>
          <p>{productInfo.item_info}</p>
          <span className={styles.itemPrice}>Last bid: {productInfo.price}$</span>
          <Link href={"/for-sale/"+ productInfo.id} className={styles.bidButton}>Bid now!</Link>
        </div>

      </div>

    </div>
  )
}

export default FeaturedSale