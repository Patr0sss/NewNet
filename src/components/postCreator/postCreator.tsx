import { useState } from "react";
import ActionBar from "../actionBar/actionBar";
import style from "./postCreator.module.css";

export default function PostCreator() {
  const actions = [
    "Transmisja wideo na żywo",
    "Zdjęcie/film",
    "Nastrój/aktywność",
  ];

  const [inputActivated, setInputActivated] = useState<boolean>(false);
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
          className={style.postCreatorInput}
          placeholder="Write a Post !"
          onClick={() => {
            setInputActivated((prev) => !prev);
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
        <div className={style.submitPost}>POST</div>
      </div>
    </div>
  );
}
