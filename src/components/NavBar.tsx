import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import myIcon from "/logo/logo_remove_bg.png";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Grid container>
          <Grid item>
            <img src={myIcon} alt="My Icon" style={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography
                variant="h4"
                sx={{
                  mr: 2,
                  fontFamily: "Truculenta",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Recommend Lunch
              </Typography>
            </Link>
          </Grid>
          <Grid item style={{ marginLeft: "auto", marginRight: "9%", display: "flex", alignItems: "center" }}>
            <li>
              <Link to={"roullette/result"} style={{ textDecoration: "none", color: "white" }}>
                Go
              </Link>
            </li>
            <li>
              <Link to={"order"} style={{ textDecoration: "none", color: "white" }}>
                Order
              </Link>
            </li>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
