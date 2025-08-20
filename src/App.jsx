import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GymLandingPage from "./pages/Landing";


const app = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GymLandingPage />} />
          <Route path="/dashboard" element={<HomePage />} />
          
        </Routes>
      </Router>
      
    </>
  );
}
export default app;

