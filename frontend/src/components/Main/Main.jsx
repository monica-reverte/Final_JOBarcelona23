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
    <div className="box">
      {data.map((item, index) => (
        <div key={`${item.id}-${index}`} className="grid-item">
          <p className="item-title">{item.TeamName}</p>
        </div>
      ))}
    </div>
  );
<<<<<<< HEAD
};
=======
      }  

>>>>>>> 286fecec819d26d35080ca37b559ac678c7c96d7
