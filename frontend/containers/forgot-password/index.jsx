import React from 'react'
import styles from './styles.module.css'
import ForgotPasswordBox from '@/components/forgot-password'

function ForgotPasswordContainer() {
  return (
    <div className={styles.loginWrapper}>
     <ForgotPasswordBox />
    </div>
  )
}

export default ForgotPasswordContainer