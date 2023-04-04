import React from 'react'
import styles from  './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

function SalesSection() {
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Mobile Phones</h3>
            <div className={styles.saleCards}>
                <div className={styles.saleCard}>
                    <Link href={'#'}>
                        <Image
                        unoptimized
                        width={350}
                        height={350}
                        src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'}
                        />
                        <div className={styles.itemInfo}>
                            <p className={styles.itemName}>Iphone 13</p>
                            <span className={styles.itemPrice}>2500$</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.saleCard}>
                    <Link href={'#'}>
                        <Image
                        unoptimized
                        width={350}
                        height={350}
                        src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'}
                        />
                        <div className={styles.itemInfo}>
                            <p className={styles.itemName}>Iphone 13</p>
                            <span className={styles.itemPrice}>2500$</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.saleCard}>
                    <Link href={'#'}>
                        <Image
                        unoptimized
                        width={350}
                        height={350}
                        src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896'}
                        />
                        <div className={styles.itemInfo}>
                            <p className={styles.itemName}>Iphone 13</p>
                            <span className={styles.itemPrice}>2500$</span>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SalesSection