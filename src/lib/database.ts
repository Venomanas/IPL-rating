import { Team, Rating } from "@/types";

const ratingsDb: Rating[]=[];
const teams: Team[] = [
  { name: "Mumbai indians", short: "MI" },
  { name: "Chennai Super kings", short: "CSK" },
  { name: "Royal Challengers Banglore", short: "RCB" },
  { name: "Kolkata knight Rider", short: "KKR" },
  { name: "Sunrisers Hyderabad", short: "SRH" },
  { name: "Delhi capitals", short: "DC" },
  { name: "Punjab Kings", short: "PBKS" },
  { name: "Gujrat Titan", short: "GT" },
  { name: "Rajasthan Royal", short: "RR" },
  { name: "Lucknow Super Giants", short: "LSG" }
];

export const addRating = (rating: Omit<Rating, 'passkey'>): string=>{
const newPasskey = Math.random().toString(36).substring(2,10);
const newRating: Rating ={...rating, passkey:newPasskey};
ratingsDb.push(newRating);
return newPasskey;
}

export const getRatings =(passkey: string): Rating[] =>{
    return ratingsDb.filter(r => r.passkey === passkey)
};

export const getTeams = (): Team[]=>{
    return teams;
};