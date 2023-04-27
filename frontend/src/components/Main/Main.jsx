import React, { useState, useEffect } from "react";

export const Main = () => {

  // const [team, setTeams] = useState([]);

  // const getTeam = async () => {
  //   const data = await fetch("http://localhost:4000/");
  //   const teams = await data.json();
  //   setTeams(teams)
  // }


  useEffect(() =>{
    fetch("http://localhost:4000/")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

    return (
      <div>
          {data.map((item) => {
              <div>
              <p>{item.squad}</p>
              </div>
            
          })}
      </div>
    )
  }