import styles from "./profilePage.module.css";
import backgroundImage from "../../defaultPictures/userBackgroundPicture2.jpg";
import profileImage from "../../defaultPictures/userProfilePicture2.png";
import { useEffect, useState } from "react";
import Post from "../../components/post/post";
import PostCreator from "../../components/postCreator/postCreator";

function ProfilePage({ user }: { user: string }) {
  const [postMessage, setPostMessage] = useState<string>("");
  const [isPostInputOpen, setIsPostInputOpen] = useState<boolean>(false);
  const [postsList, setPostsList] = useState<string[]>([]);
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

  const handleLogout = async (e: React.FormEvent) => {
    try {
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCheckUser = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/checkUser", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          <div className={styles.bottomBar}>
            <div className={styles.userName}>{user}</div>
            <div onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </div>
          </div>
        </div>

        {/* <div className={styles.postCreateBar}>
          <textarea
            id="postTextArea"
            placeholder="Write Something ..."
            required
            className={styles.postInput}
            style={{ height: isPostInputOpen ? "200px" : "50px" }}
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
        </div> */}
        <PostCreator />
        <div className={styles.postErrorMessage}>{postErrorMessage}</div>
        {postsList.map((postMessage, index) => (
          <Post
            userName={user}
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
