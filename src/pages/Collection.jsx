import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import { 
  Box, 
  Typography, 
  Grid, 
  Stack, 
  Button,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab
} from "@mui/material";

// Categories for the Center Menu
const categories = ["All Creations", "Bridal Crimson", "Maharani Zardosi", "Antique Peacock", "Emerald Cutwork"];

// Categorized Replica Data
const legacyCollection = [
  // Bridal Crimson Category
  { id: 1, title: "The Royal Crimson", price: "₹18,500 onwards", category: "Bridal Crimson", img: "crimson.jpg" },
  { id: 2, title: "The Royal Crimson V2", price: "₹19,000", category: "Bridal Crimson", img: "crimsonv2.jpg" },
  { id: 3, title: "Crimson Silk Motif", price: "₹18,500", category: "Bridal Crimson", img: "motif.jpg" },
  { id: 4, title: "Darbari Elephant Procession", price: "₹29,500", category: "Bridal Crimson", img: "crimson3.jpg" },
  { id: 5, title: "Kundan Paisley Symphony", price: "₹26,000", category: "Bridal Crimson", img: "crimson4.jpg" },
  { id: 6, title: "Mughal Jaali Weave", price: "₹25,500", category: "Bridal Crimson", img: "crimson5.jpg" },
  { id: 7, title: "Regal Peacock & Vine", price: "₹30,000", category: "Bridal Crimson", img: "crimson6.jpg" },
  { id: 8, title: "Gul-e-Crimson Lattice", price: "₹24,000", category: "Bridal Crimson", img: "crimson7.jpg" },
  { id: 9, title: "Temple Border Embroidery", price: "₹22,500", category: "Bridal Crimson", img: "crimson8.jpg" },
  { id: 10, title: "Shimmering Zari Jaal", price: "₹27,000", category: "Bridal Crimson", img: "crimson9.jpg" },
  { id: 11, title: "Sultana Pearl Choker-Neck", price: "₹31,000", category: "Bridal Crimson", img: "crimson10.jpg" },
  { id: 12, title: "Meenakari Bird Ensemble", price: "₹28,500", category: "Bridal Crimson", img: "crimson11.jpg" },
  { id: 13, title: "Golden Lotus Scallop", price: "₹23,000", category: "Bridal Crimson", img: "crimson12.jpg" },
  { id: 14, title: "Royal Crimson Bell Motif", price: "₹21,000", category: "Bridal Crimson", img: "crimson13.jpg" },
  
  // Maharani Zardosi Category
  { id: 15, title: "Maharani Zardosi Heavy", price: "₹22,000", category: "Maharani Zardosi", img: "maharani1.jpg" },
  { id: 16, title: "Maharani Zardosi Slim", price: "₹21,000", category: "Maharani Zardosi", img: "maharani2.jpg" },
  { id: 17, title: "Antique Zardosi Fusion", price: "₹23,500", category: "Maharani Zardosi", img: "fusion.jpg" },
  { id: 18, title: "Maharani Royal Bloom", price: "₹24,000", category: "Maharani Zardosi", img: "maharani4.jpg" },
  { id: 19, title: "Maharani Peacock Grace", price: "₹26,500", category: "Maharani Zardosi", img: "maharani5.jpg" },
  { id: 20, title: "Maharani Lotus Crown", price: "₹27,000", category: "Maharani Zardosi", img: "maharani6.jpg" },
  { id: 21, title: "Maharani Golden Vine", price: "₹25,000", category: "Maharani Zardosi", img: "maharani7.jpg" },
  { id: 22, title: "Maharani Heritage Elegance", price: "₹29,000", category: "Maharani Zardosi", img: "maharani8.jpg" },
  { id: 23, title: "Maharani Floral Majesty", price: "₹24,500", category: "Maharani Zardosi", img: "maharani9.jpg" },
  { id: 24, title: "Maharani Diamond Dew", price: "₹32,000", category: "Maharani Zardosi", img: "maharani10.jpg" },
  { id: 25, title: "Maharani Regal Feather", price: "₹25,500", category: "Maharani Zardosi", img: "maharani11.jpg" },
  { id: 26, title: "Maharani Ruby Blossom", price: "₹28,000", category: "Maharani Zardosi", img: "maharani12.jpg" },
  { id: 27, title: "Maharani Queen's Charm", price: "₹35,000", category: "Maharani Zardosi", img: "maharani13.jpg" },
  { id: 28, title: "Maharani Imperial Garden", price: "₹30,000", category: "Maharani Zardosi", img: "maharani14.jpg" },
  
  // Antique Peacock Category
  { id: 29, title: "Antique Gold Peacock", price: "₹16,999", category: "Antique Peacock", img: "gold.jpg" },
  { id: 30, title: "Golden Peacock Neck", price: "₹17,500", category: "Antique Peacock", img: "neck.jpg" },
  { id: 31, title: "Antique Royal Peacock", price: "₹26,500", category: "Antique Peacock", img: "peacock3.jpg" },
  { id: 32, title: "Peacock Heritage Bloom", price: "₹28,000", category: "Antique Peacock", img: "peacock4.jpg" },
  { id: 33, title: "Golden Peacock Grace", price: "₹29,500", category: "Antique Peacock", img: "peacock5.jpg" },
  { id: 34, title: "Vintage Mayura Charm", price: "₹25,000", category: "Antique Peacock", img: "peacock6.jpg" },
  { id: 35, title: "Peacock Crown Elegance", price: "₹31,000", category: "Antique Peacock", img: "peacock7.jpg" },
  { id: 36, title: "Antique Feather Majesty", price: "₹27,000", category: "Antique Peacock", img: "peacock8.jpg" },
  { id: 37, title: "Royal Mayura Vine", price: "₹28,500", category: "Antique Peacock", img: "peacock9.jpg" },
  { id: 38, title: "Peacock Pearl Blossom", price: "₹32,500", category: "Antique Peacock", img: "peacock10.jpg" },
  { id: 39, title: "Heritage Peacock Trail", price: "₹30,000", category: "Antique Peacock", img: "peacock11.jpg" },
  { id: 40, title: "Antique Regal Plume", price: "₹26,000", category: "Antique Peacock", img: "peacock12.jpg" },
  { id: 41, title: "Mayura Palace Design", price: "₹34,000", category: "Antique Peacock", img: "peacock13.jpg" },
  { id: 42, title: "Imperial Peacock Garden", price: "₹35,500", category: "Antique Peacock", img: "peacock14.jpg" },
  
  // Emerald Cutwork Category
  { id: 43, title: "Emerald Cutwork Spec", price: "₹16,999", category: "Emerald Cutwork", img: "cut1.jpg" },
  { id: 44, title: "Vibrant Kalai Cutwork", price: "₹24,500", category: "Emerald Cutwork", img: "cut2.jpg" },
  { id: 45, title: "Heritage Needlework", price: "₹24,500", category: "Emerald Cutwork", img: "cut3.jpg" },
  { id: 46, title: "Emerald Floral Border", price: "₹16,900", category: "Emerald Cutwork", img: "cut4.jpg" },
  { id: 47, title: "Emerald Royal Bloom", price: "₹25,500", category: "Emerald Cutwork", img: "/cut5.jpg" },
  { id: 48, title: "Emerald Leaf Elegance", price: "₹24,000", category: "Emerald Cutwork", img: "cut6.jpg" },
  { id: 49, title: "Emerald Floral Grace", price: "₹26,000", category: "Emerald Cutwork", img: "cut7.jpg" },
  { id: 50, title: "Emerald Vine Majesty", price: "₹28,500", category: "Emerald Cutwork", img: "cut8.jpg" },
  { id: 51, title: "Emerald Garden Charm", price: "₹27,000", category: "Emerald Cutwork", img: "cut9.jpg" },
  { id: 52, title: "Emerald Petal Symphony", price: "₹29,000", category: "Emerald Cutwork", img: "cut10.jpg" },
  { id: 53, title: "Emerald Heritage Weave", price: "₹32,000", category: "Emerald Cutwork", img: "cut11.jpg" },
  { id: 54, title: "Emerald Lotus Dream", price: "₹30,500", category: "Emerald Cutwork", img: "cut12.jpg" },
  { id: 55, title: "Emerald Pearl Blossom", price: "₹33,000", category: "Emerald Cutwork", img: "cut13.jpg" },
  { id: 56, title: "Emerald Crown Beauty", price: "₹35,000", category: "Emerald Cutwork", img: "cut14.jpg" }
];



function Collection() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  // Read the state flag from router navigation
  const isFullView = location.state?.isFullView || false; 

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredCollection = selectedTab === 0 
    ? legacyCollection 
    : legacyCollection.filter(item => item.category === categories[selectedTab]);

  // Rest of the code remains exact same...
  const displayedCollection = (selectedTab === 0 && !isFullView)
    ? filteredCollection.slice(0, 14) 
    : filteredCollection;

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#110005", 
        // Background Image integrated neatly without shifting elements
        backgroundImage: `linear-gradient(rgba(17, 0, 5, 0.85), rgba(13, 0, 5, 0.9)), url('/42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: { xs: "60px 16px", md: "80px 40px" },
        color: "#fff",
        position: "relative",
        overflow: "hidden",

        // Smooth entry animation for cards grid
        "@keyframes sequentialFade": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      }}
    >
      {/* Abstract Needle & Thread Artistic Overlays */}
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          border: "1px dashed rgba(222, 170, 77, 0.15)",
          borderRadius: "50%",
          top: "5%",
          right: "-5%",
          pointerEvents: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "120px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #deaa4d)",
            transform: "rotate(-45deg)",
            top: "30%",
            left: "10%"
          }
        }}
      />

      {/* HEADER SECTION */}
      <Stack alignItems="center" spacing={1} sx={{ mb: 4, textAlign: "center" }}>
        <Typography 
          variant="subtitle2" 
          sx={{ color: "#deaa4d", letterSpacing: "0.2em", fontSize: "18px", fontWeight: 600 }}
        >
          OUR EXQUISITE COLLECTION
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: { xs: "28px", md: "38px" }, 
            fontWeight: 700, 
            letterSpacing: "0.05em",
            color: "#fff"
          }}
        >
          THE ROYAL AARI LEGACY
        </Typography>
        <Box 
          sx={{ 
            width: "180px", 
            height: "12px", 
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.6
          }} 
        />
      </Stack>

      {/* CENTERED CATEGORY TABS SWITCHER */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange} 
          centered
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": { 
              backgroundColor: "#deaa4d", 
              height: "2px" 
            },
            "& .MuiTab-root": {
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mx: { xs: 0, sm: 1 },
              transition: "all 0.3s ease",
              "&.Mui-selected": { 
                color: "#deaa4d" 
              },
              "&:hover": { 
                color: "#deaa4d", 
                opacity: 0.85 
              }
            }
          }}
        >
          {categories.map((cat, index) => (
            <Tab label={cat} key={index} />
          ))}
        </Tabs>
      </Box>

      {/* 7-COLUMN RESPONSIVE REPLICA GRID - EXACT ORIGINAL UNTOUCHED LAYOUT */}
      <Box sx={{ maxWidth: "1600px", margin: "0 auto" }}>
        <Grid 
          container 
          columns={{ xs: 2, sm: 4, md: 6, lg: 7 }} 
          spacing={2.5}
        >
          {displayedCollection.map((item, index) => (
            <Grid 
              size={1} 
              key={item.id}
              sx={{
                animation: "sequentialFade 0.4s ease-out forwards",
                animationDelay: `${(index % 7) * 0.04}s`,
                opacity: 0
              }}
            >
              <Card
                sx={{
                  background: "#16060a",
                  border: "1px solid #4a3319",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",

                  "&:hover": {
                    transform: "scale(1.03)",
                    borderColor: "#deaa4d",
                    boxShadow: "0 0 20px rgba(222, 170, 77, 0.45)",
                    "& .action-overlay": { opacity: 1 },
                    "& .action-btn": { transform: "translateY(0)" }
                  }
                }}
              >
                {/* Media Wrapper */}
                <Box sx={{ position: "relative", pt: "115%", overflow: "hidden", backgroundColor: "#1e1115" }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Dark Blur Animated Overlay */}
                  <Box
                    className="action-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(17, 0, 5, 0.75)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Button
                      variant="contained"
                      className="action-btn"
                      sx={{
                        backgroundColor: "#deaa4d",
                        color: "#110005",
                        fontWeight: 700,
                        fontSize: "11px",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        transform: "translateY(10px)",
                        transition: "transform 0.3s ease",
                        "&:hover": { backgroundColor: "#fff" }
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>

                {/* Info Text Area */}
                <CardContent 
                  sx={{ 
                    p: 1.5, 
                    textAlign: "center", 
                    backgroundColor: "#0d0205", 
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0.5
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ fontWeight: 500, fontSize: "13px", color: "#eaeaea", letterSpacing: "0.02em" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ color: "#deaa4d", fontSize: "12px", fontWeight: 600, fontFamily: "serif" }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Collection;