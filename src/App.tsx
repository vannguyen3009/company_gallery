import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AffiliateSharing from "./pages/AffiliateSharing";
import AffiliateSummary from "./pages/AffiliateSummary";
import AffiliateIncome from "./pages/AffiliateIncome";
import AffiliateReferrals from "./pages/AffiliateReferrals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/affiliate-sharing" element={<AffiliateSharing />} />
        <Route path="/affiliate-summary" element={<AffiliateSummary />} />
        <Route path="/affiliate-income" element={<AffiliateIncome />} />
        <Route path="/aff-referrals" element={<AffiliateReferrals />} />
      </Routes>
    </Router>
  );
}

export default App;
