import "./App.css";
import AppRouter from "./Components/Navbar/Routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
