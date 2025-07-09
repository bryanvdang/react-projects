import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { useContext, useState, createContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [IsDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("showSidebar: ", showSidebar);
  };

  const logoutUser = () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        IsDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
//custom hook
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
