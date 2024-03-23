import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
  { option: "0", style: { backgroundColor: "green" }, optionSize: 1 },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2", style: { backgroundColor: "orange" } },
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleComplete = (prizeIndex: number) => {
    console.log(prizeIndex);

    setMustSpin(false);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => handleComplete(prizeNumber)}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};
