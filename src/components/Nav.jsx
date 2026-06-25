import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/AboutUs" },
  { label: "COLLECTION", path: "/Collection" },
  { label: "AAri CLASS", path: "/AariClass" },
  { label: "CONTACT", path: "/Contact" }
];

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        background: "linear-gradient(180deg,#110005,#1a0508)",
        color: "#fff",
        p: 3,
        width: "240px"
      }}
    >
      {/* =========================================================
          MOBILE DRAWER LOGO (FITTED TO ROYAL AARI PERMANENTLY)
          ========================================================= */}
      <Box 
        onClick={() => {
          navigate("/");
          setMobileOpen(false);
        }}
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 1.5,
          mb: 3,
          cursor: "pointer"
        }}
      >
        <Box sx={{ position: "relative", width: "45px", height: "45px", display: "flex", alignItems: "center", justifyContent: "center", "&::before": { content: '""', position: "absolute", width: "30px", height: "30px", borderRadius: "50%", border: "1px dashed rgba(255, 202, 67, 0.25)" } }}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, index) => (
            <Box key={index} sx={{ position: "absolute", transform: `rotate(${deg}deg) translateY(-16px)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LocalFloristIcon sx={{ fontSize: "9px", background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
            </Box>
          ))}
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontWeight: 800, position: "absolute", zIndex: 2, background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            YA
          </Typography>
        </Box>
        
        <Typography 
          sx={{ 
            fontWeight: 800, 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "16px", 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          YAZHINI BOUTIQUE
        </Typography>
      </Box>

      <List>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path, { 
                    state: item.path === "/Collection" ? { isFullView: true } : null 
                  });
                  setMobileOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  color: active ? "#ffca43" : "#fff",
                  backgroundColor: active ? "rgba(255,202,67,0.1)" : "transparent"
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(17,0,5,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,202,67,0.2)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            
            {/* =========================================================
                DESKTOP MAIN LOGO WITH FLOWER MANDALA
                ========================================================= */}
            <Box 
              onClick={() => navigate("/")}
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5,
                cursor: "pointer",
                "&:hover .desktop-nav-flower": {
                  transform: "scale(1.1) rotate(45deg)",
                  filter: "drop-shadow(0px 0px 8px rgba(252, 246, 186, 0.6))"
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px dashed rgba(255, 202, 67, 0.25)",
                  }
                }}
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, index) => (
                  <Box
                    key={index}
                    className="desktop-nav-flower"
                    sx={{
                      position: "absolute",
                      transform: `rotate(${deg}deg) translateY(-18px)`,
                      transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocalFloristIcon 
                      sx={{ 
                        fontSize: "10px",
                        background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }} 
                    />
                  </Box>
                ))}

                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    position: "absolute",
                    zIndex: 2,
                    background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  YA
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  fontSize: { xs: 16, sm: 20 },
                  fontFamily: "'Playfair Display', serif",
                  textTransform: "uppercase",
                  background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                YAZHINI BOUTIQUE
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    state={item.path === "/Collection" ? { isFullView: true } : null}
                    sx={{
                      color: active ? "#ffca43" : "#fff",
                      fontWeight: 700
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* MOBILE ICON */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, color: "#ffca43" }}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Nav;