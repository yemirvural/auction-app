import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

function ProductStats({remainingTime}) {
  return (
    <div className={styles.container}>
      <div className={styles.statsHeader}>
        
      </div>
      <div className={styles.statsBody}>
        <div className={styles.timeRemain}>
          {remainingTime.loaded ? 
            (remainingTime.diff > 0 ? (`${remainingTime.days}:${remainingTime.hours}:${remainingTime.minutes}:${remainingTime.seconds} time left`) : "Auction closed!")
            :
            'Loading...'
          }
        </div>
      </div>
    </div>
  )
}

export default ProductStats;