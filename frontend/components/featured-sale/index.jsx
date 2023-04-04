import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

function FeaturedSale() {
  return (
    <div className={styles.saleWrapper}>
      <div className={styles.saleHeader}>
        <h3 className={styles.saleTitle}>Iphone 14 Pro Max on Sale!</h3>
        <span className={styles.saleTimer}>Remain 14:10:15</span>
      </div>
      <div className={styles.saleBody}>
        <div className={styles.itemPhoto}>
          <img src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'}></img>
        </div>
        <div className={styles.itemDetail}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quisquam blanditiis, aut ratione facilis sunt perspiciatis corrupti, reprehenderit alias quasi minus nesciunt quos eius delectus asperiores magnam. Eius maiores, cum necessitatibus est dolore, doloremque libero neque reiciendis eveniet accusamus animi deserunt illum aperiam. Numquam et facere unde aperiam laboriosam nulla neque aliquam recusandae quis, atque molestias architecto veniam consequuntur officia culpa hic eius accusantium animi non eligendi tempore vitae nobis enim at! Molestias rerum adipisci error molestiae assumenda tenetur! Obcaecati velit sequi eligendi aliquid iusto harum voluptatum consectetur voluptatibus maxime. Voluptatum itaque ipsum ex pariatur dolores. Dolorum voluptatem veniam totam.</p>
          <Link href={'#'} className={styles.bidButton}>Bid now!</Link>
        </div>

      </div>

    </div>
  )
}

export default FeaturedSale