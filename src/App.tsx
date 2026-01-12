import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AffiliateSharing from "./pages/AffiliateSharing";
import AffiliateSummary from "./pages/AffiliateSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/affiliate-sharing" element={<AffiliateSharing />} />
        <Route path="/affiliate-summary" element={<AffiliateSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
