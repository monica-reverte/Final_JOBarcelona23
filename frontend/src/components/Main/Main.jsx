import React, { useEffect, useState } from "react";

export const Main = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const api = await fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => console.log(data));
    const data = await api.json();
    // setTeams(data.recipes);
  };

  return (
    <div>
      <h3>TEAMS</h3>
      <div>
        {teams.map((team) => {
          return <div key={team.id}></div>;
        })}
      </div>
    </div>
  );
};
