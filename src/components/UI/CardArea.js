import React, { useState } from "react";
import classes from "./CardArea.module.css";
import Card from "./Card";

const CardArea = (props) => {
  const [currentState, setCurrentState] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);

  const onClickHandler = (number) => {
    props.onShuffle(number);
    const arrCopy = [...currentState];
    const newArr = [];
    while (arrCopy.length > 0) {
      let randomIndex = Math.floor(Math.random() * arrCopy.length);
      let item = arrCopy.splice(randomIndex, 1);
      newArr.push(item[0]);
    }
    setCurrentState(newArr);
  };

  return (
    <div className={classes.extents}>
      {currentState.map((number, i) => (
        <Card
          key={number}
          number={currentState[i]}
          onClick={() => onClickHandler(number)}
        />
      ))}
    </div>
  );
};
export default CardArea;
