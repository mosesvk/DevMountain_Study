import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
