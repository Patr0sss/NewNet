import styles from "./friendBar.module.css";

function FriendBar() {
  return (
    <div className={styles.friendBar}>
      <div className={styles.friendImage}></div>
      <div className={styles.friendName}>KOX</div>
    </div>
  );
}
export default FriendBar;
