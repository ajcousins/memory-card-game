import classes from "./WinModal.module.css";
const WinModal = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.modal}>
        <h1 className={classes.title}>You Win!</h1>
        <button className={classes.restart} onClick={props.onRestart}>
          RESTART GAME
        </button>
      </div>
    </div>
  );
};
export default WinModal;
