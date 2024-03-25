import styles from "./buttonHover.module.css";

function ButtonHover({ text, onClick }: { text: string; onClick?: () => {} }) {
  return <div className={styles.bn5}>{text}</div>;
}
export default ButtonHover;
