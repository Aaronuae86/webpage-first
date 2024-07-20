import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AnimeDetail from "./components/AnimeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:name" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
