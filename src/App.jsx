import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import NavBarSection from "./NavBarSection";

function App() {
  return (
    <>
      <Router>
        <NavBarSection />
        <Routes>
          <Route path="/" element={<HomeSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
