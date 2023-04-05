import React from 'react'
import styles from './styles.module.css'
import LoginBox from '@/components/login'

function LoginContainer() {
  return (
    <div className={styles.loginWrapper}>
     <LoginBox />
    </div>
  )
}

export default LoginContainer