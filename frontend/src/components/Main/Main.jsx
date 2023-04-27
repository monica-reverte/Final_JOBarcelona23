import React, { useEffect } from "react";

export const Main = () => {
<<<<<<< HEAD
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
=======

useEffect(() =>{
  fetch("http://localhost:4000/")
  .then(response => response.json())
  .then(data => console.log(data))
}, []);
    return (
      <div>
          
>>>>>>> dev
      </div>
    </div>
  );
};
