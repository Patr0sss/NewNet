import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProfilePage from "./pages/profilePage/profilePage";
import FriendList from "./components/friendList/friendList";

const FriendArray = ["Mateusz Kroplewski", "Filip Porębski", "Szymon Woźniak"];

function App() {
  return (
    <div>
      {/* <React.StrictMode> */}
      <NavBar firendList={FriendArray} />
      {useLocation().pathname !== "/loginPage" ? (
        <FriendList firendList={FriendArray} />
      ) : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        {/* <Route path="*" element={<Navigate to="/loginPage" />} /> */}
      </Routes>
      {/* </React.StrictMode> */}
    </div>
  );
}

export default App;
