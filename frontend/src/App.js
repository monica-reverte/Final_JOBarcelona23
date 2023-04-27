import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Pages from "./router/Pages";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
