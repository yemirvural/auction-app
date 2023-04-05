import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

function LoginBox() {
  return (
    <div className={styles.containerWrapper}>
        <nav className={styles.navigationMenu}>
        <Link className={styles.active} href={'/login'}>Login</Link>
        <Link href={'/signup'}>SignUp</Link>
        </nav>
        <div className={styles.inputs}>

        </div>
    </div>
  )
}

export default LoginBox