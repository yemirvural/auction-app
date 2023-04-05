import React from 'react'
import styles from './styles.module.css'
import ForgetPasswordBox from '@/components/forget-password'

function ForgetPasswordContainer() {
  return (
    <div className={styles.loginWrapper}>
     <ForgetPasswordBox />
    </div>
  )
}

export default ForgetPasswordContainer