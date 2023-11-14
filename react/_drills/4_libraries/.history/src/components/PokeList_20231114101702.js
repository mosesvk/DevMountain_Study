import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokeListCom } from "./PokeList"; // Assuming PokeListCom is exported from PokeList.js

const PokeList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokeListCom />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
};

export default PokeList;
