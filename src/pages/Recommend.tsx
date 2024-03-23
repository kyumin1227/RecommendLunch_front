import { Grid } from "@mui/material";
import Roulette from "../components/Roulette";

const Recommend = () => {
  return (
    <>
      <Grid container style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Roulette />
      </Grid>
    </>
  );
};

export default Recommend;
