import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <TopBar/>
    </BrowserRouter>
  );
}

export default App;
