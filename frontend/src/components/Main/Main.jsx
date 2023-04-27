import React, { useState, useEffect } from 'react';

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/")
    .then(response => response.json())
    .then(data => {
      console.log(data.teams);
      setData(data.teams);
    })
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.TeamName}</p>
        </div>
      ))}
    </div>
  )
}

