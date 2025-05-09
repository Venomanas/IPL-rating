import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.585 10.11c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
          ></path>
        </svg>
        <h1 className="text-xl font-bold">TeamRate</h1>
      </div>
      <nav>
        <Link href="/" className="text-white mx-2 hover:underline">
          Home
        </Link>
        <Link href="/rate" className="text-white mx-2 hover:underline">
          Rate a Team
        </Link>
        <Link href="/results" className="text-white mx-2 hover:underline">
          View Results
        </Link>
      </nav>
    </div>
  );
}
