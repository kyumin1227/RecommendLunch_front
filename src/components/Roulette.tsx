import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { RestaurentType } from "../types/RestaurentTypes";

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // optionSize 0인 값을 제외하기 위해 0인 값을 필터 후 새로 아이디 부여
  const lawData = useSelector((state: any) => {
    return state.restaurent;
  });

  const data = lawData
    .filter((item: RestaurentType) => item.optionSize !== 0)
    .map((item: RestaurentType, index: number) => ({
      id: index,
      option: item.option,
      optionSize: item.optionSize,
    }));

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
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => handleComplete(prizeNumber)}
        />
      </Grid>
      <Grid item>
        <Button onClick={handleSpinClick} variant="contained">
          SPIN
        </Button>
      </Grid>
    </>
  );
};
