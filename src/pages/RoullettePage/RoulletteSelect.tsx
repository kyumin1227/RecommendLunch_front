import { useSelector } from "react-redux";
import SelectedRestaurentList from "../../components/RestaurentList/SelectedRestaurentList";
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import UnSelectedRestautentList from "../../components/RestaurentList/UnSelectedRestautentList";
import { RestaurentType } from "../../types/RestaurentTypes";

const Home = () => {
  const restaurents = useSelector((state: any) => {
    return state.restaurent;
  });

  const selectedRestaurents = restaurents.filter((item: RestaurentType) => item.optionSize > 0);
  const unselectedRestaurents = restaurents.filter((item: RestaurentType) => item.optionSize === 0);

  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h4" marginY={2}>
              선택 완료
            </Typography>
            <Typography marginLeft={2}>({selectedRestaurents.length})</Typography>
          </Box>
          <hr />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <SelectedRestaurents>
            <SelectedRestaurentList data={selectedRestaurents} />
          </SelectedRestaurents>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h4" marginY={2}>
              미선택
            </Typography>
            <Typography marginLeft={2}>({unselectedRestaurents.length})</Typography>
          </Box>
          <hr />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <SelectedRestaurents>
            <UnSelectedRestautentList data={unselectedRestaurents} />
          </SelectedRestaurents>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const SelectedRestaurents = styled.div`
  width: 90%;
  height: 300px;
  overflow: auto;
`;
