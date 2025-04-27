import React from 'react';
import { useState } from "react";
import { getRatings } from "@/lib/database";
import { Rating } from "@/types";


export default function Result() {
    const [passkey,setPasskey]= useState<string>("");
     const [results, setResults] = useState<Rating[]>([]);
     const [error, setError] = useState<string>("");

    const handleViewResults =()=>{
        const matchingRatings = getRatings(passkey);
        if (matchingRatings.length > 0){
            setResults(matchingRatings);
            setError("");

        }
        else{
            setResults([]);
            setError("Invalid passkey. please try again.")
        }
    };


  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
        IPL Team Ratings
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter Passkey</label>
        <input
          type="text"
          value={passkey}
          onChange={e => setPasskey(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your passkey"
        />
      </div>
      <button
        onClick={handleViewResults}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
      >
        View Results
      </button>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {results.length > 0 && (
        <div>
          {results.map((result: Rating, index: number) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Team:</span> {result.team}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Rating:</span>{" "}
                <span
                  className={`inline-block w-8 h-8 rounded-full text-center leading-8 ${
                    result.rating >= 8
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {result.rating}
                </span>
              </p>
              {result.comment && (
                <p className="text-gray-700">
                  <span className="font-semibold">Comment:</span>{" "}
                  {result.comment}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
