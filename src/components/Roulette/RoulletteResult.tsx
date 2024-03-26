import { Grid } from "@mui/material";
import styled from "styled-components";

const RouletteResult = (result: any) => {
  const data = result.result;

  return (
    <>
      <Grid container>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <ResultOption>{data?.option}</ResultOption>
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <ResultLink href={`${data?.mobileLink}`} target="_blank">
            <ResultImg src="/icon/naver.svg" height="20px" width="20px" />
            네이버 바로가기
          </ResultLink>
        </Grid>
      </Grid>
    </>
  );
};

export default RouletteResult;

const ResultOption = styled.h6`
  margin-bottom: 10px;
`;

const ResultLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: blue;
`;

const ResultImg = styled.img`
  margin-right: 10px;
`;
