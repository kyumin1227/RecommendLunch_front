import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
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
    </>
  );
}

export default Root;
