import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/Landing Page/LandingPage";
import AccountValidation from "./components/pages/Account Validation/AccountValidation";
import Otp from "./components/pages/OTP/Otp";
import CardView from "./components/pages/Card View/CardView";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="m-10 font-[Libre Franklin]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Account-Validation" element={<AccountValidation />} />

            <Route path="/OTP" element={<Otp />} />

            <Route path="/Card-View" element={<CardView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
