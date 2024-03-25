import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Link to="./loginPage">LOGIN</Link>
    </div>
  );
}
export default HomePage;
