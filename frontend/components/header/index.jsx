import React from 'react'
import Link from 'next/link'
import {RiAuctionFill} from "react-icons/ri"
import {AiOutlineSearch} from "react-icons/ai"
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}> 
          <Link href={'#'} className={styles.logo}>
            <RiAuctionFill /> Auction.io
          </Link>
          <label htmlFor="" className={styles.searchBar}>
            <input type="text" placeholder='NOT WORKING'/>
            <AiOutlineSearch />
          </label>
          <nav className={styles.navigationMenu}>
            <Link className='border border-orange-600 text-orange-600 rounded-md hover:bg-orange-500 hover:text-white font-light transition-colors duration-300' href={'/login'}>Login</Link>
            <Link className='border border-orange-600 text-orange-600 rounded-md hover:bg-orange-500 hover:text-white font-light transition-colors duration-300' href={'/signup'}>SignUp</Link>
          </nav>
        </div>
    </header>
  )
}

export default Header