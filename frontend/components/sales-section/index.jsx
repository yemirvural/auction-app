import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

function SalesSection({ sales }) {

    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>{sales.title}</h3>
                <div className={styles.saleCards}>
                    {sales.results.map((sale) => (
                        <div className={styles.saleCard}>
                            <Link href={`/for-sale/${sale.id}`}>
                                <Image
                                    unoptimized
                                    width={300}
                                    height={300}
                                    alt='asd'
                                    src={sale.image_path}
                                />
                                <div className={styles.itemInfo}>
                                    <p className={styles.itemName}>{sale.title}</p>
                                    <span className={styles.itemPrice}>{sale.price}$</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SalesSection