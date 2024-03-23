import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = useSelector((state) => {
    return state.restaurent;
  });

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
