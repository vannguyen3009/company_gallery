import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AffiliateSharing from "./pages/AffiliateSharing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/affiliate-sharing" element={<AffiliateSharing />} />
      </Routes>
    </Router>
  );
}

export default App;
