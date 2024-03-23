import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material";
import restaurents from "../data/RestaurentData.js";
import { RestaurentType } from "../types/RestaurentTypes.js";

const RestaurentList = () => {
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
