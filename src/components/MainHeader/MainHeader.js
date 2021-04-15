import React from "react";

const MainHeader = (props) => {
  return (
    <div>
      <h1>MOVIE MEMORY CARD GAME</h1>
      <h2>
        Score points by clicking on a movie title. If you click on the same
        title twice, the score resets!
      </h2>
      <h2 className='score-tally'>SCORE: {props.score}</h2>
      <h2 className='score-tally'>HIGH-SCORE: {props.highScore}</h2>
    </div>
  );
};
export default MainHeader;
