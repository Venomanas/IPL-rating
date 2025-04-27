import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Header />
      <main className="flex-grow p-6 bg-gray-100 min-h-screen w-full">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
          IPL Team Rating System
        </h2>
        <p className="text-center text-gray-600 mb-8 bg-purple-100">
          Rate teams on a scale of 1-10. View results securely with a private
          key.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-80 mb-6">
            <div className="flex justify-center mb-4">
              <svg
                className="w-10 h-10 text-purple-500"
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
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Rate Teams
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Submit your ratings for any team on a scale of 1-10. Provide
              feedback to help teams improve.
            </p>
            <Link
              href="/rate"
              className="w-full block bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 text-center"
            >
              Rate Now
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-80 mb-6">
            <div className="flex justify-center mb-4">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              View Results
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Access team ratings using a secure key. Keep results confidential
              and controlled.
            </p>
            <Link
              href="/results"
              className="w-full block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-center"
            >
              View Results
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 mt-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-4">How It Works ?</h3>
          <div className="flex justify-around p-6 m-2 ">
            <div className="text-center">
              <div className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">
                1
              </div>
              <p>Select a Team</p>
              <p className="text-sm">Choose a team to rate from the list.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">
                2
              </div>
              <p>Submit Rating</p>
              <p className="text-sm">Rate on a scale of 1-10 and submit.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">
                3
              </div>
              <p>View Results</p>
              <p className="text-sm">Use your secure key to view ratings.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
