import FriendBar from "../../components/friendBar/friendBar";
import styles from "./homePage.module.css";
import backgroundImage from "../../defaultPictures/userBackgroundPicture.jpg";
import profileImage from "../../defaultPictures/userProfilePicture.png";
import { useState } from "react";

function HomePage() {
  const [postMessage, setPostMessage] = useState<string>("");
  const [postsList, setPostsList] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("Krystian Kiejno");

  return (
    <div className={styles.homePage}>
      <div className={styles.contentSide}>
        <div className={styles.userTopBar}>
          <img
            className={styles.userBackgroundImage}
            src={backgroundImage}
            alt="Background"
          ></img>
          <img
            className={styles.userProfilImage}
            src={profileImage}
            alt="Profile"
          ></img>
          <div className={styles.userName}>{userName}</div>
        </div>

        <div className={styles.postCreateBar}>
          <textarea
            placeholder="Write Something ..."
            required
            className={styles.postInput}
            onChange={(e) => {
              setPostMessage(e.target.value);
              console.log(postMessage);
            }}
          ></textarea>
          <div
            className={styles.postButton}
            onClick={() => {
              setPostsList([...postsList, postMessage]);
            }}
          >
            Post
          </div>
        </div>
        {postsList.map((postText) => (
          <div>{postText}</div>
        ))}
      </div>

      <div className={styles.friendList}>
        Friend List
        <FriendBar />
        <FriendBar />
        <FriendBar />
        <FriendBar />
      </div>
    </div>
  );
}
export default HomePage;
