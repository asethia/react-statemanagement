import React, {useState} from "react";
import Star from "./Star.js";

const createArray = (length) => [...Array(length)];
// add default rating zero
export default function StarRating({totalStars = 5, rating=0}) {
  const [selectedStars, setSelectedStars] = useState(rating);
  return (
    // fragments - A common pattern in React is for a component to return multiple elements.
    <>
    {
     createArray(totalStars).map((n,i)=> (
          <Star 
            key={i} 
            selected={selectedStars > i}
            onSelect={()=> setSelectedStars(i + 1)}
          />
     ))}
    <p>
     {selectedStars} of {totalStars} stars
    </p>
   </>
 );
}
