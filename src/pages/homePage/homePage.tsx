import PostCreator from "../../components/postCreator/postCreator";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.contentSide}>{/* <PostCreator /> */}</div>
    </div>
  );
}
export default HomePage;
