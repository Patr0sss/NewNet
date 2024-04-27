import { Link } from "react-router-dom";
import styles from "./friendBar.module.css";

function FriendBar({ friendName }: { friendName: string }) {
  return (
    <Link to={"/ " + friendName} className={styles.friendBar}>
      <div className={styles.friendImage}></div>
      <div className={styles.friendName}>{friendName}</div>
    </Link>
  );
}
export default FriendBar;
