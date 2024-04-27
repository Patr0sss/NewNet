import React, { useState } from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import FriendBar from "../friendBar/friendBar";

function NavBar({ firendList }: { firendList?: string[] }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [searchBarData, setSearchBarData] = useState<string>("");

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
            onChange={(e) => {
              setSearchBarData(e.target.value);
            }}
          ></input>

          <div className={styles.navbarContent}>
            <Link to="/profilePage" className={styles.navbarLink}>
              Profile Page
            </Link>
            <Link to="/" className={styles.navbarLink}>
              Home Page
            </Link>
          </div>
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
          {firendList
            ?.filter(
              (friendName) =>
                friendName
                  .toLowerCase()
                  .includes(searchBarData.toLowerCase()) ||
                searchBarData.toLowerCase().includes(friendName.toLowerCase())
            )
            .map((friendName) => (
              <FriendBar friendName={friendName} />
            ))}

          {firendList?.filter(
            (friendName) =>
              friendName.toLowerCase().includes(searchBarData.toLowerCase()) ||
              searchBarData.toLowerCase().includes(friendName.toLowerCase())
          ).length === 0
            ? "Brak Wyników"
            : ""}
        </div>
      ) : null}
    </>
  );
}

export default NavBar;
