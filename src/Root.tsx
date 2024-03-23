import { Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Container maxWidth="sm">
        <nav>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/recommend"}>Recommend</Link>
          </li>
        </nav>
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Root;
