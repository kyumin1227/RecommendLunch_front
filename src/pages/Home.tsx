import { useSelector } from "react-redux";
import SelectedRestaurentList from "../components/RestaurentList/SelectedRestaurentList";
import styled from "styled-components";
import { Typography } from "@mui/material";
import UnSelectedRestautentList from "../components/RestaurentList/UnSelectedRestautentList";

const Home = () => {
  const restaurents = useSelector((state: any) => {
    return state.restaurent;
  });

  // TODO 데이터를 필터링 하여 optionSize가 1 이상이면 위의 리스트로 0 이면 아래의 리스트로 보내기

  return (
    <>
      <Typography variant="h4" marginY={2}>
        선택 완료
      </Typography>
      <hr />
      <SelectedRestaurents>
        <SelectedRestaurentList data={restaurents} />
      </SelectedRestaurents>
      <hr />
      <Typography variant="h4" marginY={2}>
        미선택
      </Typography>
      <hr />
      <SelectedRestaurents>
        <UnSelectedRestautentList data={restaurents} />
      </SelectedRestaurents>
      <hr />
    </>
  );
};

export default Home;

const SelectedRestaurents = styled.div`
  width: 90%;
  height: 300px;
  overflow: auto;
`;
