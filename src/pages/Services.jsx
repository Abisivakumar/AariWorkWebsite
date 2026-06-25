import React from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Stack 
} from "@mui/material";
// Icons
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SchoolIcon from "@mui/icons-material/School";
import DiamondIcon from "@mui/icons-material/Diamond";

const cleanServices = [
  {
    id: 1,
    title: "Bridal Work",
    desc: "Custom royal Aari embroidery for your dream bridal blouses.",
    icon: <ContentCutIcon sx={{ fontSize: "28px", color: "#ffca43" }} />
  },
  {
    id: 2,
    title: "Aari Classes",
    desc: "Professional hand embroidery training with materials.",
    icon: <SchoolIcon sx={{ fontSize: "28px", color: "#ffca43" }} />
  },
  {
    id: 3,
    title: "Premium Materials",
    desc: "Top-tier authentic Zardosi, pristine beads & silk fabrics.",
    icon: <DiamondIcon sx={{ fontSize: "28px", color: "#ffca43" }} />
  },
];

function Services() {
  return (
    <>
    {/* Loading Google Fonts */}
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;600;700&display=swap');
      `}
    </style>

    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(rgba(17, 0, 5, 0.85), rgba(13, 0, 5, 0.9)), url('/42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,
        padding: { xs: "60px 20px", md: "80px 40px" },
        color: "#fff",
        position: "relative"
      }}
    >
      {/* HEADER */}
      <Stack
        spacing={1}
        sx={{
          mb: 4,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#deaa4d",
            letterSpacing: "3px",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif", 
            textTransform: "uppercase"
          }}
        >
          OUR SERVICES
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif", // Added Playfair
            fontSize: { xs: "28px", md: "38px" },
            fontWeight: 700,
            color: "#fff",
            wordSpacing:"5px"
          }}
        >
          WHAT WE DO BETTER
        </Typography>

        <Box
          sx={{
            width: "50px",
            height: "2px",
            backgroundColor: "#ffca43",
            mt: 1,
          }}
        />
      </Stack>

      {/* SERVICE DESCRIPTION */}
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
          mb: 6,
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.75)",
            fontSize: { xs: "14px", md: "15px" },
            lineHeight: 1.8,
            fontWeight: 400,
            fontFamily: "'Poppins', sans-serif", // Added Poppins for description
          }}
        >
          At Arivor, we bring together traditional Aari craftsmanship and
          contemporary design excellence. Our services range from luxurious
          bridal blouse embroidery and designer customization to professional
          Aari training and premium embroidery materials. Every project is
          carefully handcrafted with attention to detail, ensuring elegance,
          durability, and timeless beauty. Whether you are a bride, fashion
          enthusiast, or aspiring embroidery artist, we provide personalized
          solutions tailored to your unique style and requirements.
        </Typography>
      </Box>

      {/* CARDS GRID */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={3}>
          {cleanServices.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  background: "rgba(26, 5, 8, 0.5)",
                  border: "1px solid rgba(255, 202, 67, 0.15)",
                  borderRadius: "12px", // Matching home cards radius
                  padding: "35px 25px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#ffca43",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Playfair Display', serif", // Premium serif for title
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#fff",
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    fontFamily: "'Poppins', sans-serif", // Clean poppins for short desc
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </>
  );
}

export default Services;