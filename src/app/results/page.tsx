import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Result from "@/components/Result";
import React from 'react'

export default function page() {
  return (
    <div>
        <Header />
        <main className="flex-grow p-6 bg-gray-100">
            <Result />
        </main>
        <Footer />
    </div>
  )
}
