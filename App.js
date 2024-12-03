import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect hook
import SignInSignUp from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import Landing from './pages/Land.js';
import Sidebar from './pages/Slidebar.js';
import Weather from './pages/Weather.js';
import GreenScan from "./pages/Greenscan.js";
import ProfileInput from "./pages/ProfileInput.js";
import ProfileView from "./pages/ProfileView.js";

function App() {
  // Custom component to handle Sidebar and routing
  const LayoutWithSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hideSidebarPaths = ['/signin-signup']; // Paths where Sidebar should not appear

    useEffect(() => {
      // Check if profile data exists in localStorage
      const profileData = localStorage.getItem("farmerData");

      // If no profile data, redirect to ProfileInput page
      if (!profileData && location.pathname !== "/signin-signup") {
        navigate("/profile-input");
      }
    }, [location, navigate]);

    return (
      <>
        {!hideSidebarPaths.includes(location.pathname) ? (
          <Sidebar>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Landing />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/greenscan" element={<GreenScan />} />
              <Route path="/profile-view" element={<ProfileView />} />
              <Route path="/profile-input" element={<ProfileInput />} />

            </Routes>
          </Sidebar>
        ) : (
          <Routes>
            <Route path="/signin-signup" element={<SignInSignUp />} />
          </Routes>
        )}
      </>
    );
  };

  return (
    <Router>
      <LayoutWithSidebar />
    </Router>
  );
}

export default App;
