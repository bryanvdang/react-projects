import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>nav bar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
