import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Pages from "./router/Pages";
import { Footer } from "./components/Footer/Footer";
import { Filter } from "./components/Filter/Filter";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Filter />
        <Pages />
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
