import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

function ProductSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Image
            unoptimized
            width={300}
            height={300}
            alt='asd'
            src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896"}
        />
      </div>
      <div className={styles.publisher}>
        <h4>Iphone 14 Pro Max 13" 256GB</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maiores ipsum ipsam architecto voluptatum, explicabo esse nihil ab voluptates dolores maxime, nobis recusandae iure odio. Veritatis explicabo at fuga laboriosam alias inventore atque, doloremque iure. Quos perferendis expedita repellendus. Molestias soluta ipsa quis incidunt cum.</p>
        <div className={styles.profile}>
          <img src="https://www.fakepersongenerator.com/Face/female/female1021554720306.jpg" alt="" />
          <a href="" className={styles.publisherUsername}>alexis_metz</a><span>9.8</span>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider