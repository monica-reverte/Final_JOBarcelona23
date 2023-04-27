import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home"; 
import { Players } from "../Pages/Players"; 
import { Team } from "../Pages/Team";
import { useLocation } from "react-router-dom";
import { Goals } from "../Pages/Goals";


function Pages() {

    const location = useLocation();

    return(
        
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/player/:name" element={<Players />} />
            <Route path="/team/:name" element={<Team />} />
        </Routes>
    )
}

export default Pages