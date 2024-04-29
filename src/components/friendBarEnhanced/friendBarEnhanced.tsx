import { Link } from "react-router-dom";
import styles from "./friendBarEnhanced.module.css";
import ArrowDown from "../../assets/arrowDown";
import { useEffect, useState } from "react";

function FriendBarEnhanced({ friendName }: { friendName: string }) {
  const [isFriendBarOpen, setIsFriendBarOpen] = useState<boolean>(false);
  const [friendInitials, setFriendInitials] = useState("");
  const [friendColor, setFriendColor] = useState<string>("");

  function generateColorHexFromInitials(initials: string) {
    // Konwersja liter na wartości ASCII
    const charCode1 = initials.charCodeAt(0);
    const charCode2 = initials.charCodeAt(1);

    // Obliczenie składowych koloru RGB
    const red = (charCode1 * 20) % 256;
    const green = (charCode2 * 200) % 256;
    const blue = (100 * (charCode1 + charCode2)) % 256;

    // Formatowanie składowych koloru do formatu HEX
    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    // Połączenie składowych koloru w jeden kolor HEX
    const colorHex = `#${redHex}${greenHex}${blueHex}`;

    return colorHex;
  }

  const findInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length === 2) {
      const initials = words.map((word) => word[0]);
      setFriendInitials(initials.join("").toUpperCase());
    } else {
      const initials = words[0][0] + words[0][1];
      setFriendInitials(initials.toUpperCase());
    }
    setFriendColor(generateColorHexFromInitials(friendInitials));
  };
  useEffect(() => {
    findInitials(friendName);
  }, [friendName, friendColor]);

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
          <div
            className={styles.friendImage}
            style={{ backgroundColor: friendColor }}
          >
            {friendInitials}
          </div>
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
