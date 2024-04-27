import { useState } from "react";
import styles from "./friendList.module.css";
import FriendBarEnhanced from "../friendBarEnhanced/friendBarEnhanced";

export default function FriendList({ firendList }: { firendList?: string[] }) {
  const [searchBarData, setSearchBarData] = useState<string>("");

  return (
    <div className={styles.friendList}>
      <div className={styles.header}>
        Friends
        <input
          className={styles.headerInput}
          placeholder="Find a Friend ..."
          onChange={(e) => {
            setSearchBarData(e.target.value);
          }}
        />
      </div>
      <div className={styles.list}>
        {firendList
          ?.filter(
            (friendName) =>
              friendName.toLowerCase().includes(searchBarData.toLowerCase()) ||
              searchBarData.toLowerCase().includes(friendName.toLowerCase())
          )
          .map((friendName) => (
            <FriendBarEnhanced friendName={friendName} />
          ))}
        {firendList?.filter(
          (friendName) =>
            friendName.toLowerCase().includes(searchBarData.toLowerCase()) ||
            searchBarData.toLowerCase().includes(friendName.toLowerCase())
        ).length === 0
          ? "Brak wyników"
          : ""}
      </div>
    </div>
  );
}
