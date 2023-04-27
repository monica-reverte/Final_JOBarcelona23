import React, { useState, useEffect } from 'react';

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/")
    .then(response => response.json())
    .then(data => {

      setData(data.teams);
    })
  }, []);

  return (
    <div className="box">
      {data.map((item, index) => (
        <div key={`${item.id}-${index}`} className="grid-item">
          <p className="item-title">{item.TeamName}</p>
        </div>
      ))}
    </div>
  );
      }  

