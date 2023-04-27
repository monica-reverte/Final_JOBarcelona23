import React, { useEffect } from "react";

export const Main = () => {

useEffect(() =>{
  fetch("http://localhost:4000/")
  .then(response => response.json())
  .then(data => console.log(data))
}, []);
    return (
      <div>
          
      </div>
    )
  }