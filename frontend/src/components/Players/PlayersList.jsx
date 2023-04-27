import React from 'react'

export const Players = () => {

  const [players, setPlayers] = useState ([]);
  let params = useParams();
  
  const getPlayers = async (name) => {
    const data = await fetch();
    const list = await data.json();
    setPlayers(list.results);
  };

  useEffect(()=> {
    getPlayers(params.type)
  }, []);
  

  return (
  <div
  >
    {list.map((item)=> {
      return(
        <ul key={item.id}>

          <Link to={"/players/" + item.id}>
            <li>
          <img src={item.image} alt={item.title}/>
          <h4>{item.title}</h4>
          </li>
          </Link>
        </ul>
      )
    })}
    </div>
  )
  }
