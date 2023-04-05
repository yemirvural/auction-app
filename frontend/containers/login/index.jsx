import React from 'react'
import LoginBox from '@/components/login-box'
import styles from './styles.module.css'

function LoginContainer() {
  return (
    <div className={styles.loginWrapper}>
     <LoginBox />
    </div>
  )
}

export default LoginContainer