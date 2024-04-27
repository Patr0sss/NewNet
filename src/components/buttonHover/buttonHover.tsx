import styles from "./buttonHover.module.css";

function ButtonHover({
  text,
  customStyle,
  onClick,
}: {
  text: string;
  customStyle?: string;
  width?: string;
  onClick?: () => void;
}) {
  return (
    <div className={styles.bn5} onClick={onClick}>
      {text}
    </div>
  );
}
export default ButtonHover;
