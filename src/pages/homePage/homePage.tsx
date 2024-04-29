import PostCreator from "../../components/postCreator/postCreator";
import { User } from "../../types";
import styles from "./homePage.module.css";

function HomePage({ usersList }: { usersList: User[] }) {
  return (
    <div className={styles.homePage}>
      <div className={styles.contentSide}>{JSON.stringify(usersList)}</div>
    </div>
  );
}
export default HomePage;
