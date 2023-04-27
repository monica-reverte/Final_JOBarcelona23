import { useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";


export const SearchInput = () => {

    const [searchTeam, setSearchTeam] = useState([]);
    let params = useParams();

    const getSearchInput = async (name) => {
    const data = await fetch();
    const team = await data.json();
    setSearchTeam(team.results);
    };

    useEffect(()=>{
    getSearchInput(params.search);
    }, [params.search]);

    return (
    <Grid>
        {searchTeam.map((item) => {
        return(
            <Card key={item.id}>
            <Link to={"/team/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
            </Card>
        )
        })}

    </Grid>
    )
}