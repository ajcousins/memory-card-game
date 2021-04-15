import classes from "./CardArea.module.css";
import img01 from "../../assets/01_lion-king.jpg";
import img02 from "../../assets/02_up.jpg";
import img03 from "../../assets/03_jaws.jpg";
import img04 from "../../assets/04_star-wars.jpg";
import img05 from "../../assets/05_anchorman.jpg";
import img06 from "../../assets/06_et.jpg";
import img07 from "../../assets/07_amelie.jpg";
import img08 from "../../assets/08_american-beauty.jpg";
import img09 from "../../assets/09_terminator.jpg";
import img10 from "../../assets/10_parasite.jpg";
import img11 from "../../assets/11_back-to-the-future.jpg";
import img12 from "../../assets/12_kill-bill.jpg";

const filenameRefs = {
  1: img01,
  2: img02,
  3: img03,
  4: img04,
  5: img05,
  6: img06,
  7: img07,
  8: img08,
  9: img09,
  10: img10,
  11: img11,
  12: img12,
};

const Card = (props) => {
  const imgRef = filenameRefs[props.number];

  return (
    <img
      className={classes.card}
      src={imgRef}
      alt={"movie title"}
      onClick={props.onClick}
    ></img>
  );
};
export default Card;
