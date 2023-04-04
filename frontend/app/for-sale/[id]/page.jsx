'use client';
import React, { useEffect, useState } from 'react'
import sales from '@/mocks/sales.json'
import ProductContainer from '@/containers/product'
import moment from "moment";

function ForSalePage({ params }) {
  const productInfo = sales.results.find(item => item.id === Number(params.id));
  const [remainingTime, setRemainingTime] = useState({days: '', hours: '', minutes: '', seconds: '', diff: '', loaded: false});

  useEffect(() => {
    const targetDate = moment(productInfo.end_date);
    const intervalId = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now);
      const duration = moment.duration(diff);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      setRemainingTime({days, hours, minutes, seconds, diff, loaded: true});
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ProductContainer productInfo={productInfo} remainingTime={remainingTime} />
    </div>
  )
}

export default ForSalePage