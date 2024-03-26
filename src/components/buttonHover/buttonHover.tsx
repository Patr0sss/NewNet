import styles from "./buttonHover.module.css";

function ButtonHover({
  text,
  customStyle,
  onClick,
}: {
  text: string;
  customStyle?: string;
  width?: string;
  onClick?: () => {};
}) {
  return <div className={styles.bn5}>{text}</div>;
}
export default ButtonHover;
