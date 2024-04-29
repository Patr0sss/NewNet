import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProfilePage from "./pages/profilePage/profilePage";
import FriendList from "./components/friendList/friendList";
import ActionColumn from "./components/actionColumn/actionColumn";
import { useCookies } from "react-cookie";
import { User } from "./types";

const FriendArray = [
  "Mateusz Kroplewski",
  "Filip Porębski",
  "Szymon Woźniak",
  "kkiejno@gmail.com",
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies] = useCookies(["jwt"]);
  const [user, setUser] = useState<User>({
    _id: "",
    email: "",
    password: "",
    posts: [],
  });
  const [usersList, setUsersList] = useState<User[]>([]);

  const handleCheckUser = async () => {
    if (cookies.jwt) {
      try {
        const res = await fetch("http://localhost:3000/checkUser", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUsersList(data);
      console.log(usersList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCheckUser();
  }, [cookies.jwt]);

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <NavBar
          firendList={usersList.filter((userr) => userr._id !== user._id)}
          user={user}
        />
      ) : null}

      {isAuthenticated ? (
        <>
          <FriendList
            firendList={usersList.filter((userr) => userr._id !== user._id)}
          />
          <ActionColumn />
        </>
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage usersList={usersList} />
            ) : (
              <Navigate to="/loginPage" />
            )
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
