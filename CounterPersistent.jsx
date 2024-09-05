// import { useRef, useState, useEffect } from "react";

// export const CounterPersistent = () => {
//   let a = useRef(0);
//   const handleClick = () => {
//     a.current += 1;
//     console.log("Current count:", a.current);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Count</button>
//     </>
//   );
// };
import React, { useRef } from "react";

export const CounterPersistent = () => {
  const countRef = useRef(0); // Store count in useRef

  const incrementCount = () => {
    countRef.current += 1; // Increment the count
    console.log("Current count:", countRef.current);
  };

  return (
    <div>
      <p>Check the console to see the updated count without re-rendering.</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
