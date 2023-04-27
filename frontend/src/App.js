import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Pages from "./router/Pages";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Filter } from "./components/Filter/Filter";
import { Banner } from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Filter />
        <Pages />
        <Banner />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
