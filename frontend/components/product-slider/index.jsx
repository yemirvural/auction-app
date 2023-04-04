import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

function ProductSlider({ productInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Image
            unoptimized
            width={300}
            height={300}
            alt='asd'
            src={productInfo.image_path}
        />
      </div>
      <div className={styles.publisher}>
        <h4>{productInfo.title}</h4>
        <p>{productInfo.item_info}</p>
        <div className={styles.profile}>
          <img src="https://www.fakepersongenerator.com/Face/female/female1021554720306.jpg" alt="" />
          <a href="" className={styles.publisherUsername}>alexis_metz</a>
          <span className={styles.publisherRate}>9.8</span>
          <button className={styles.contact}>Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider