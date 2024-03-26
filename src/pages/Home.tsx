import { useSelector } from "react-redux";
import SelectedRestaurentList from "../components/RestaurentList/SelectedRestaurentList";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import UnSelectedRestautentList from "../components/RestaurentList/UnSelectedRestautentList";
import { RestaurentType } from "../types/RestaurentTypes";

const Home = () => {
  const restaurents = useSelector((state: any) => {
    return state.restaurent;
  });

  // TODO 데이터를 필터링 하여 optionSize가 1 이상이면 위의 리스트로 0 이면 아래의 리스트로 보내기

  const selectedRestaurents = restaurents.filter((item: RestaurentType) => item.optionSize > 0);
  const unselectedRestaurents = restaurents.filter((item: RestaurentType) => item.optionSize === 0);

  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h4" marginY={2}>
            선택 완료
          </Typography>
          <hr />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <SelectedRestaurents>
            <SelectedRestaurentList data={selectedRestaurents} />
          </SelectedRestaurents>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Typography variant="h4" marginY={2}>
            미선택
          </Typography>
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
