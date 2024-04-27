import { useEffect, useState } from "react";
import CommentIcon from "../../assets/commentIcon";
import LikeIcon from "../../assets/likeIcon";
import styles from "./post.module.css";

export default function Post({
  userName,
  postMessage,
  onDelete,
  comments,
}: {
  userName: string;
  postMessage: string;
  onDelete?: () => void;
  comments: string[];
}) {
  const [postDate, setPostDate] = useState("");
  const [isCommentSectionOpen, setIsCommentSectionOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const date = new Date();
    const formattedDate =
      date.toLocaleDateString() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    setPostDate(formattedDate);
  }, []);

  // const [postComments, setPostComments] = useState<string[]>([]);

  return (
    <>
      <div
        className={styles.post}
        style={{ marginBottom: isCommentSectionOpen ? "0px" : "100px" }}
      >
        <div className={styles.userName}>
          <div className={styles.topPostBarLeft}>
            <div>{userName}</div>
            <div>{postDate}</div>
          </div>

          <div onClick={onDelete} className={styles.deleteButton}>
            Delete
          </div>
        </div>
        <div className={styles.postMessage}>{postMessage}</div>
        <div className={styles.bottomPostBar}>
          <div className={styles.bottomAction}>
            <LikeIcon />
            Like
          </div>
          <div
            className={styles.bottomAction}
            onClick={() => setIsCommentSectionOpen((previous) => !previous)}
          >
            <CommentIcon />
            Comment
          </div>
        </div>
      </div>
      {isCommentSectionOpen ? (
        <div
          className={styles.commentSection}
          style={{
            marginBottom: isCommentSectionOpen ? "100px" : "0px",
          }}
        >
          {comments.length === 0 ? (
            <div>0 KOMENTARZY</div>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className={styles.comment}>
                {comment}
              </div>
            ))
          )}

          <input
            placeholder="Write a Comment"
            className={styles.commentInput}
          />
        </div>
      ) : null}
    </>
  );
}
