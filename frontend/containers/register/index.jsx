import React from 'react'
import styles from './styles.module.css'
import SignUpBox from '@/components/register'

function SignUpContainer() {
  return (
    <div className={styles.loginWrapper}>
     <SignUpBox />
    </div>
  )
}

export default SignUpContainer