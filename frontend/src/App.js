import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Pages from "./router/Pages";


function App() {
  return <div className="App">
    <BrowserRouter>
        <NavBar />
        <Pages />
    </BrowserRouter>
    
    </div>;
}

export default App;
