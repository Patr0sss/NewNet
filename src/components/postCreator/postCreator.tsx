import { useState } from "react";
import ActionBar from "../actionBar/actionBar";
import style from "./postCreator.module.css";

export default function PostCreator({ _id }: { _id: string }) {
  const [inputActivated, setInputActivated] = useState<boolean>(false);
  const [postContent, setPostContent] = useState<string>("");

  const createPost = async () => {
    const id = _id.replace(/"/g, "");
    try {
      await fetch(
        // eslint-disable-next-line no-template-curly-in-string
        `http://localhost:3000/users/${id}/posts`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: postContent }),
          credentials: "include",
        }
      );
      setInputActivated(false);
      const postInput = document.getElementById(
        "postInput"
      ) as HTMLTextAreaElement;
      postInput.value = "";
    } catch (error) {
      console.error("Błąd podczas dodawania posta:", error);
    }
  };

  return (
    <div className={style.postCreator}>
      <div
        className={style.topSection}
        style={{
          height: inputActivated ? "130px" : "38px",
        }}
      >
        <div
          className={style.userImage}
          style={{ display: inputActivated ? "none" : "" }}
        ></div>
        <textarea
          id="postInput"
          className={style.postCreatorInput}
          placeholder="Write a Post !"
          onClick={() => {
            setInputActivated((prev) => !prev);
          }}
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          style={{
            height: inputActivated ? "100px" : "calc(50%)",
            width: inputActivated ? "100%" : "",
          }}
        />
      </div>
      <div className={style.bottomSection}>
        {/* {actions.map((action, index) => (
          <ActionBar actionName={action} fontSize="9px" key={index} />
        ))} */}
        <div className={style.submitPost} onClick={createPost}>
          POST
        </div>
      </div>
    </div>
  );
}
