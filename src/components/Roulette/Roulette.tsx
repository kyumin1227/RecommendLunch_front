import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { RestaurentType } from "../../types/RestaurentTypes";
import RouletteResult from "./RoulletteResult";

// TODO 결과 출력

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(-1);
  const [result, setResult] = useState<RestaurentType>();

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
      pcLink: item.pcLink,
      mobileLink: item.mobileLink,
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
          onStopSpinning={() => {
            setResult(data.filter((item: RestaurentType) => item.id === prizeNumber)[0]);
            handleComplete(prizeNumber);
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Button onClick={handleSpinClick} variant="contained">
          SPIN
        </Button>
      </Grid>
      <Grid item>{prizeNumber === -1 || mustSpin ? null : <RouletteResult result={result} />}</Grid>
    </>
  );
};
