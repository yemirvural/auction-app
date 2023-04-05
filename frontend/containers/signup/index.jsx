import React from 'react'
import styles from './styles.module.css'
import SignUpBox from '@/components/signup'

function SignUpContainer() {
  return (
    <div className={styles.loginWrapper}>
     <SignUpBox />
    </div>
  )
}

export default SignUpContainer