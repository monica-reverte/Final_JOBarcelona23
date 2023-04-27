import React, { useState, useEffect } from "react";

export const Main = () => {
  const [data, setData] = useState([]);

<<<<<<< HEAD
  // useEffect(() => {
  //   fetch("http://localhost:4000/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.teams);
  //       setData(data.teams);
  //     });
  // }, []);
=======
  useEffect(() =>{
    fetch("http://localhost:4000/")
    .then(response => response.json())
    .then(data => {

      setData(data.teams);
    })
  }, []);
>>>>>>> dev

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.TeamName}</p>
        </div>
      ))}
    </div>
  );
};
