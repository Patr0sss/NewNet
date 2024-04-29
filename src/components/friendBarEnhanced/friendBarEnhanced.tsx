import { Link } from "react-router-dom";
import styles from "./friendBarEnhanced.module.css";
import ArrowDown from "../../assets/arrowDown";
import { useState } from "react";

function FriendBarEnhanced({ friendName }: { friendName: string }) {
  const [isFriendBarOpen, setIsFriendBarOpen] = useState<boolean>(false);
  return (
    <div className={styles.friendBarColumn}>
      <div
        className={styles.friendBar}
        onClick={() => {
          setIsFriendBarOpen((previous) => !previous);
        }}
        style={{
          backgroundColor: isFriendBarOpen ? "rgb(229, 228, 226)" : "",
          opacity: isFriendBarOpen ? "0.8" : "auto",
          borderLeft: isFriendBarOpen ? "1px solid white" : "",
          borderRight: isFriendBarOpen ? "1px solid white" : "",
        }}
      >
        <div className={styles.friendInfoSide}>
          <div className={styles.friendImage}></div>
          <div className={styles.friendName}>{friendName}</div>
        </div>
        <div
          className={styles.arrow}
          style={{
            transform: isFriendBarOpen ? "rotate(0deg)" : "rotate(-90deg)",
          }}
        >
          <ArrowDown />
        </div>
      </div>
      {isFriendBarOpen ? (
        <div className={styles.actionWithFriend}>
          <Link to={"/ " + friendName} className={styles.friendTabItem}>
            Visit Profile
          </Link>
          <div className={styles.friendTabItem}>Write a Message</div>
          <div className={styles.friendTabItem + " " + styles.deleteFriend}>
            Delete This Friend
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default FriendBarEnhanced;
