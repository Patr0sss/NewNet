import style from "./actionBar.module.css";
export default function ActionBar({
  actionName,
  fontSize,
}: {
  actionName: string;
  fontSize?: string;
}) {
  return (
    <div className={style.actionBar} style={{ fontSize: fontSize }}>
      {actionName}
    </div>
  );
}
