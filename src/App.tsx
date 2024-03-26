import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import Footer from "./components/footer/footer";

function App() {
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  return (
    <div>
      <React.StrictMode>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilePage" element={<Footer />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
