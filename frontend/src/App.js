import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Pages from "./router/Pages";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Filters } from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Filters />
        <Pages />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
