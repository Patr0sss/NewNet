import React, { useEffect, useState } from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import FriendBar from "../friendBar/friendBar";
import { User } from "../../types";

function NavBar({ firendList, user }: { firendList?: User[]; user: User }) {
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
            className={user ? styles.userLogged : styles.loginButton}
          >
            {user ? user.email : "Login"}
          </Link>
        </div>
      </nav>
      {isSearchBarOpen ? (
        <div className={styles.searchBarTab}>
          {firendList
            ?.filter(
              (friendName) =>
                friendName.email
                  .toLowerCase()
                  .includes(searchBarData.toLowerCase()) ||
                searchBarData
                  .toLowerCase()
                  .includes(friendName.email.toLowerCase())
            )
            .map((friendName, index) => (
              <div
                key={index}
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setIsSearchBarOpen(false);
                }}
              >
                <FriendBar friendName={friendName.email} />
              </div>
            ))}

          {firendList?.filter(
            (friendName) =>
              friendName.email
                .toLowerCase()
                .includes(searchBarData.toLowerCase()) ||
              searchBarData
                .toLowerCase()
                .includes(friendName.email.toLowerCase())
          ).length === 0
            ? "Brak Wyników"
            : ""}
        </div>
      ) : null}
    </>
  );
}

export default NavBar;
