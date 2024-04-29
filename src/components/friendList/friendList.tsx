import { useState } from "react";
import styles from "./friendList.module.css";
import FriendBarEnhanced from "../friendBarEnhanced/friendBarEnhanced";
import { User } from "../../types";

export default function FriendList({ firendList }: { firendList?: User[] }) {
  const [searchBarData, setSearchBarData] = useState<string>("");

  return (
    <div className={styles.friendList}>
      <div className={styles.header}>
        {/* Friends */}
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
              friendName.email
                .toLowerCase()
                .includes(searchBarData.toLowerCase()) ||
              searchBarData
                .toLowerCase()
                .includes(friendName.email.toLowerCase())
          )
          .map((friendName, index) => (
            <FriendBarEnhanced friendName={friendName.email} key={index} />
          ))}
        {firendList?.filter(
          (friendName) =>
            friendName.email
              .toLowerCase()
              .includes(searchBarData.toLowerCase()) ||
            searchBarData.toLowerCase().includes(friendName.email.toLowerCase())
        ).length === 0
          ? "Brak wyników"
          : ""}
      </div>
    </div>
  );
}
