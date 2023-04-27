import React, { useState, useEffect } from "react";

export const Main = () => {
  const [teams, setTeams] = useState([]);

  const getTeam = async () => {
    const data = await fetch("http://localhost:4000/");
    const teams = await data.json();
    setTeams(teams);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div>
      {teams.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.squad}</p>
          </div>
        );
      })}
    </div>
  );
};
