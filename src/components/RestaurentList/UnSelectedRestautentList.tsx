import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { RestaurentType } from "../../types/RestaurentTypes.js";
import { changeOptionSize } from "../../store/Restaurent.js";
import { useDispatch } from "react-redux";

const UnSelectedRestautentList = (data: any) => {
  const dispatch = useDispatch();

  const restaurents: RestaurentType[] = data.data;

  const handleUp = (id: number, optionSize: number) => {
    optionSize += 1;
    dispatch(changeOptionSize({ id, optionSize }));
  };

  return (
    <>
      {restaurents.map((restaurent: RestaurentType) => (
        <ListItem key={restaurent.id}>
          <Grid container>
            <Grid item xs={10}>
              <ListItemText primary={restaurent.option} />
            </Grid>
            <Grid item xs={2}>
              <ListItemButton
                sx={{
                  bgcolor: "#1e88e5",
                  color: "white",
                  ":hover": { bgcolor: "darkblue" },
                  borderRadius: "10px",
                  width: "auto",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleUp(restaurent.id, restaurent.optionSize)}
              >
                Append
              </ListItemButton>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </>
  );
};

export default UnSelectedRestautentList;
