'use client'
import React , { useState } from 'react'
import { addRating, getTeams } from '@/lib/database'
import { Team } from '@/types'


export default function RateTeam() {

    const teams = getTeams();
    const [selectedTeam, setSelectedTeam] = useState<string>(teams[0].name);
    const [rating, setRating]= useState<number>(8);
    const [comment,setComment]= useState<string>("");
    const [passkey,setPasskey]= useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = () =>{
        const newPasskey = addRating({ team: selectedTeam, rating, comment});
        setPasskey(newPasskey);
        setMessage("Rating submitted successfully!");
        setTimeout(()=> setMessage("You got TimeOut"),3000);
    }

  return (
   <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md h-svh ">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">Rate an IPL Team</h2>
      <p className="text-center text-gray-600 mb-8">Select a team and provide your rating</p>
      
      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      <div className="mb-4 ">
        <label className="block text-gray-700 mb-2">Select Team</label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          {teams.map((team: Team) => (
            <option key={team.short} value={team.name}>{team.name} ({team.short})</option>
          ))}
        </select>
      </div>
      <div className="mb-10 p-2 mt-10 ">
        <label className="block text-gray-700 mb-2">Rating (1-10)</label>
        <div className="flex space-x-2 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num: number) => (
            <button
              key={num}
              onClick={() => setRating(num)}
              className={`w-10 h-10 rounded-full ${
                rating === num ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10 p-2  ">
        <label className="block text-gray-700 mb-2">Comment (Optional)</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={3}
        ></textarea>
      </div>
      {passkey && (
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Passkey (Save this!)</label>
          <input
            type="text"
            value={passkey}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
      )}
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setSelectedTeam(teams[0].name);
            setRating(8);
            setComment("");
            setPasskey("");
          }}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
}
