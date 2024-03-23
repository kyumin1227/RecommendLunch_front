import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { RestaurentType } from "../types/RestaurentTypes.js";
import { changeOptionSize } from "../store/Restaurent.js";
import { useDispatch, useSelector } from "react-redux";

const RestaurentList = () => {
  const dispatch = useDispatch();
  const restaurents = useSelector((state) => {
    return state.restaurent;
  });

  const handleUp = (id: number, optionSize: number) => {
    optionSize += 1;
    dispatch(changeOptionSize({ id, optionSize }));
  };

  const handleDown = (id: number, optionSize: number) => {
    if (optionSize === 1) {
      return;
    }
    optionSize -= 1;
    dispatch(changeOptionSize({ id, optionSize }));
  };
  return (
    <>
      List
      {restaurents.map((restaurent: RestaurentType) => (
        <ListItem key={restaurent.id}>
          <Grid container>
            <Grid item>
              <ListItemText primary={restaurent.option} />
            </Grid>
            <Grid item style={{ marginLeft: "auto", marginRight: "30px" }} xs={1}>
              <ListItemButton
                sx={{
                  bgcolor: "#1e88e5",
                  color: "white",
                  ":hover": { bgcolor: "darkblue" },
                  borderRadius: "10px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => handleUp(restaurent.id, restaurent.optionSize)}
              >
                +
              </ListItemButton>
            </Grid>
            <Grid item xs={1}>
              <ListItemText primary={restaurent.optionSize} />
            </Grid>
            <Grid item xs={1}>
              <ListItemButton
                sx={{
                  bgcolor: "#f44336",
                  color: "white",
                  ":hover": { bgcolor: "darkred" },
                  borderRadius: "10px",
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => handleDown(restaurent.id, restaurent.optionSize)}
              >
                -
              </ListItemButton>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </>
  );
};

export default RestaurentList;
