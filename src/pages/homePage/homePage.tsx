import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.contentSide}>
        Home Page
        <input type="date" />
      </div>
    </div>
  );
}
export default HomePage;
