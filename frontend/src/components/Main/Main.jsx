import React, { useEffect, useState } from "react";

export const Main = () => {


  const [teams, setTeams] = useState([]);

  useEffect(()=> {
    getTeams();
  }, []);

  const getTeams = async () => {
      const api = await fetch("http://localhost:4000")
      console.log(api)
      const data = await api.json();
      setTeams(data.recipes)
      
    }
    return (
      <div>
          
      </div>
    )
  }