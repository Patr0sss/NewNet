import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProfilePage from "./pages/profilePage/profilePage";
import FriendList from "./components/friendList/friendList";
import ActionColumn from "./components/actionColumn/actionColumn";
import { useCookies } from "react-cookie";

const FriendArray = ["Mateusz Kroplewski", "Filip Porębski", "Szymon Woźniak"];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies] = useCookies(["jwt"]);
  const [user, setUser] = useState("");

  const handleCheckUser = async () => {
    if (cookies.jwt) {
      try {
        const res = await fetch("http://localhost:3000/checkUser", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setUser(data.user.email);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleCheckUser();
  }, [cookies.jwt]);

  useEffect(() => {
    const token = cookies.jwt;
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [cookies]);

  return (
    <div>
      {useLocation().pathname !== "/loginPage" ? (
        <NavBar firendList={FriendArray} user={user} />
      ) : null}

      {isAuthenticated ? (
        <>
          <FriendList firendList={FriendArray} />
          <ActionColumn />
        </>
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/loginPage" />
          }
        />
        <Route
          path="/profilePage"
          element={
            isAuthenticated ? (
              <ProfilePage user={user} />
            ) : (
              <Navigate to="/loginPage" />
            )
          }
        />
        <Route
          path="/loginPage"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to="/profilePage " />
          }
        />
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
