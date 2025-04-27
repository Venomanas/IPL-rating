import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RateTeam from '@/components/RateTeam'

export default function page() {
  return (
    <div>
        
        <Header />
        <main className="flex-grow p-6 bg-gray-100"></main>
        <RateTeam />
        <Footer />

    </div>
  )
}
