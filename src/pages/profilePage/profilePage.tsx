import styles from "./profilePage.module.css";
import backgroundImage from "../../defaultPictures/userBackgroundPicture.jpg";
import profileImage from "../../defaultPictures/userProfilePicture.png";
import { useEffect, useState } from "react";
import Post from "../../components/post/post";

function ProfilePage() {
  const [postMessage, setPostMessage] = useState<string>("");
  const [isPostInputOpen, setIsPostInputOpen] = useState<boolean>(false);
  const [postsList, setPostsList] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("Krystian Kiejno");
  const [postErrorMessage, setpostErrorMessage] = useState<string>("");

  const handlePostButton = () => {
    if (postMessage.replace(/\s/g, "").length > 0) {
      setPostsList([...postsList, postMessage]);
      setPostMessage("");

      const postTextArea = document.getElementById(
        "postTextArea"
      ) as HTMLTextAreaElement;
      postTextArea.value = "";
      setpostErrorMessage("");
      setIsPostInputOpen((previous) => !previous);
    } else {
      setpostErrorMessage("Type Something !");
    }
  };

  const handleDeletePost = (index: number) => {
    const updatedPostsList = [...postsList];
    updatedPostsList.splice(index, 1);
    setPostsList(updatedPostsList);
  };

  useEffect(() => {
    if (postErrorMessage !== "") {
      setTimeout(() => {
        setpostErrorMessage("");
      }, 3000);
    }
  }, [postErrorMessage]);

  return (
    <div className={styles.profilePage}>
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
            id="postTextArea"
            placeholder="Write Something ..."
            required
            className={styles.postInput}
            style={{ height: isPostInputOpen ? "250px" : "50px" }}
            onChange={(e) => {
              setPostMessage(e.target.value);
            }}
            onClick={() => {
              setIsPostInputOpen((previous) => !previous);
            }}
          ></textarea>
          <div
            className={styles.postButton}
            onClick={() => {
              handlePostButton();
            }}
          >
            Post
          </div>
        </div>
        <div className={styles.postErrorMessage}>{postErrorMessage}</div>
        {postsList.map((postMessage, index) => (
          <Post
            userName={userName}
            postMessage={postMessage}
            onDelete={() => handleDeletePost(index)}
            comments={["1 komentarz", "xD", "dobry content"]}
          />
        ))}
      </div>
    </div>
  );
}
export default ProfilePage;
