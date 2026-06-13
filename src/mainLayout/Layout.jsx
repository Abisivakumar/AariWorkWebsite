
import { Box } from "@mui/material";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// import Footer from "./Footer"; (later add பண்ணலாம்)
import { Outlet } from "react-router-dom";

 function Layout() {
  return (
    <Box>
      {/* STATIC TOP NAVBAR */}
      <Nav />

      {/* PAGE CONTENT */}
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>

      {/* STATIC FOOTER (later add) */}
      <Footer/>
    </Box>
  );
}

export default Layout;