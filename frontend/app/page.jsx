"use client"
import { Inter } from 'next/font/google'
import HomeContainer from '@/containers/home'
import { useEffect, useState } from 'react'
import featured from '@/mocks/featured.json'
import moment from "moment";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [remainingTime, setRemainingTime] = useState({days: '', hours: '', minutes: '', seconds: '', diff: '', loaded: false});
  const productInfo = featured.results[0];

  useEffect(() => {
    const targetDate = moment(featured.results[0].end_date);
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
      <HomeContainer remainingTime={remainingTime} productInfo={productInfo}/>
    </div>
  )
}
