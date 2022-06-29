import { useState } from "react";
import circle from "./circle.svg";
import cross from "./cross.svg";
const gameBoxes = new Array(9).fill("empty");

const App = () => {
  const [isCrossTurn, setIsCrossTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const fill = (index) => {
    if (gameBoxes[index] === "empty") {
      if (isCrossTurn) {
        gameBoxes[index] = "cross";
        check();

        setIsCrossTurn(false);
      } else {
        gameBoxes[index] = "circle";
        check();
        setIsCrossTurn(true);
      }
      // computersTurn();
    }
  };

  const check = () => {
    if (
      gameBoxes[0] !== "empty" &&
      gameBoxes[0] === gameBoxes[1] &&
      gameBoxes[1] === gameBoxes[2]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[0]);
    } else if (
      gameBoxes[3] !== "empty" &&
      gameBoxes[3] === gameBoxes[4] &&
      gameBoxes[4] === gameBoxes[5]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[3]);
    } else if (
      gameBoxes[6] !== "empty" &&
      gameBoxes[6] === gameBoxes[7] &&
      gameBoxes[7] === gameBoxes[8]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[6]);
    } else if (
      gameBoxes[0] !== "empty" &&
      gameBoxes[0] === gameBoxes[3] &&
      gameBoxes[3] === gameBoxes[6]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[0]);
    } else if (
      gameBoxes[1] !== "empty" &&
      gameBoxes[1] === gameBoxes[4] &&
      gameBoxes[4] === gameBoxes[7]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[1]);
    } else if (
      gameBoxes[2] !== "empty" &&
      gameBoxes[2] === gameBoxes[5] &&
      gameBoxes[5] === gameBoxes[8]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[2]);
    } else if (
      gameBoxes[0] !== "empty" &&
      gameBoxes[0] === gameBoxes[4] &&
      gameBoxes[4] === gameBoxes[8]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[0]);
    } else if (
      gameBoxes[2] !== "empty" &&
      gameBoxes[2] === gameBoxes[4] &&
      gameBoxes[4] === gameBoxes[6]
    ) {
      setIsGameOver(true);
      setWinner(gameBoxes[2]);
    }
  };

  // const computersTurn = () => {
  //   const emptyPositions = [];
  //   gameBoxes.forEach((box, index) => {
  //     if (box !== "circle" && box !== "cross") {
  //       emptyPositions.push(index);
  //     }
  //   });
  //   const random = Math.floor(Math.random() * emptyPositions.length);

  //   fill(emptyPositions[random]);

  // };

  const reset = () => {
    gameBoxes.fill("empty");
    setWinner("");
    setIsGameOver(false);
    setIsCrossTurn(true);
  };

  return (
    <div className="bg-slate-900 h-screen text-white flex justify-center items-center flex-col">
      <h1 className="text-xl">Tic Tac Toe</h1>
      <div className="mt-10 grid grid-cols-3 grid-rows-3">
        {gameBoxes.map((box, index) => (
          <span
            key={index.toString()}
            onClick={() => {
              fill(index);
            }}
            className="md:w-32 md:h-32 w-28 h-28 border flex items-center justify-center hover:cursor-pointer hover:bg-slate-600 duration-300"
          >
            {box === "cross" ? (
              <img src={cross} className="zoom-in" alt="" />
            ) : box === "circle" ? (
              <img src={circle} className="zoom-in" alt="" />
            ) : (
              <></>
            )}
          </span>
        ))}
      </div>

      <div className="container flex justify-center items-center mt-10">
        {isGameOver ? (
          <span className="text-green-400 font-black mr-4">
            {winner} is Winner!{" "}
          </span>
        ) : (
          <></>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
