import ActionBar from "../actionBar/actionBar";
import style from "./actionColumn.module.css";

function ActionColumn() {
  const actions = ["Friends", "Memories", "Groups", "Marketplace", "Events"];
  return (
    <div className={style.actionColumn}>
      {/* <div className={style.actionContainer}></div>
      <div className={style.actionContainer}></div>
      <div className={style.actionContainer} style={{ height: "20%" }}></div> */}
      {actions.map((action, index) => (
        <ActionBar actionName={action} key={index} />
      ))}
    </div>
  );
}
export default ActionColumn;
