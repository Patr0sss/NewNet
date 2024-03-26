import React, { useState } from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import FriendBar from "../friendBar/friendBar";

function NavBar() {
  const [isUserLoggedIn, seIsUserLoggedIn] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [usersList, setUsersList] = useState([]);
  return (
    <>
      {isSearchBarOpen ? (
        <div
          className={styles.fixedMenuDown}
          onClick={() => {
            setIsSearchBarOpen(false);
          }}
        ></div>
      ) : null}

      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.brandNameContainer}>
            NewNet
          </Link>
          <input
            placeholder="Search On NewNet ..."
            className={styles.searchBar}
            onClick={() => {
              setIsSearchBarOpen(true);
            }}
          ></input>

          <div className={styles.navbarContent}>CONTENT</div>
          <Link
            to={isUserLoggedIn ? "/profilePage" : "/loginPage"}
            className={styles.loginButton}
          >
            {isUserLoggedIn ? "UserName" : "Login"}
          </Link>
        </div>
      </nav>
      {isSearchBarOpen ? (
        <div className={styles.searchBarTab}>
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
          <FriendBar />
        </div>
      ) : null}
    </>
  );
}

export default NavBar;
