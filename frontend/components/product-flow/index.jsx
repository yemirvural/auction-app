"use client";
import React, { useState } from 'react'
import styles from './styles.module.css'
import { RiAuctionLine } from 'react-icons/ri';

function ProductFlow() {
  const [number, setNumber] = useState();
  const [flowMessages, setFlowMessages] = useState([100])
  const [error, setError] = useState(false);
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    const trimmedValue = value.replace(/\s/g, ""); 
    if (trimmedValue.charAt(0) !== "0"  && !isNaN(trimmedValue) && trimmedValue < 100000000) {
      setNumber(Number(trimmedValue));
    }
  };
  const handleButtonChange = (e) => {
    e.preventDefault();
    setError(false);
    const lastBid = flowMessages[flowMessages.length - 1];
    number > lastBid ? setFlowMessages((prev) => [...prev, number]) : setError(true);
    setNumber('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.flowHeader}>
        <p>Process History</p>
        {flowMessages.map(a =>
          <div className={styles.flowMessage}>
              <RiAuctionLine size={30} color='grey'/>
              <a href='' className={styles.flowUsername}>alexis_metz</a>
              <span>{a}$ Online!</span>
          </div>
        )}


      </div>
      <div className={styles.flowBody}>
        <form onSubmit={handleButtonChange} action="">
          <input placeholder={number} type="text" value={number} onChange={handleInputChange} />
          <button >Bid $<span>{number}</span></button>
          {error && <span className={styles.errorMessage}>Geçersiz Değer</span>}
        </form>
      </div>
    </div>
  )
}

export default ProductFlow