import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { RestaurentType } from "../../types/RestaurentTypes";
import RouletteResult from "./RoulletteResult";
import { redirect, useNavigate } from "react-router-dom";

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(-1);
  const [result, setResult] = useState<RestaurentType>();
  const navigate = useNavigate();

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

  // optionSize가 1 이상인 데이터가 없는 경우
  useEffect(() => {
    if (data.length === 0) {
      alert("하나 이상의 가게를 선택하여 주세요.");

      navigate("/");
    }
  }, [data, navigate]);

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
