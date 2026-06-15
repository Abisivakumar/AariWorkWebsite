import React, { useEffect, useState } from "react";
import Collection from "./Collection";
import Services from "./Services";
import Review from "./Review";
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Stack, 
  useTheme, 
  useMediaQuery 
} from "@mui/material";
import { Collections } from "@mui/icons-material";


// Premium Curated Aari Work Slider Images
const images = [
  "lehangaback.jpg", // Premium Bridal Maggam Work
  "Aari.jpg", // Intricate Zardosi Neck Design
  "Yellow.jpg",  // Heavy Elbow Sleeve Work
  "purpule.jpg",
  "lehangafront.jpg",
  "saree.jpg"
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto slide function (Every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        padding: { xs: "40px 20px 40px", md: "60px 80px" },
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        // Background Image Configuration
        backgroundImage: `url('42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

       
        

        // CSS Keyframes for Text Entrance Animations
        "@keyframes fadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(24px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          }
        }
      }}
    >
      {/* Background Ambient Glow Enhancer */}
      <Box
        sx={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.25,
          pointerEvents: "none",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, #ffca43 0%, rgba(0,0,0,0) 70%)",
          top: "-10%",
          left: "-5%",
          zIndex: 0,
        }}
      />

      {/* Main Inner Container */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1240px" }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          {/* LEFT SIDE CONTENT  */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3.5}>
              
             
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#310303", 
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textShadow: "0px 2px 4px rgba(0,0,0,0.8)"
                  }}
                >
                  ✨ Exclusive Bridal Boutique
                  <Box
                    component="span"
                    sx={{
                      padding: "4px 14px",
                      borderRadius: "999px",
                      border: "1px solid #ffca43",
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(4px)",
                      fontSize: "11px",
                      color: "#fff",
                      letterSpacing: "0.08em",
                      fontWeight: 600
                    }}
                  >
                    100% Handcrafted
                  </Box>
                </Typography>
              </Box>

              {/* Catchy Headline */}
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: "34px", sm: "46px", md: "54px" },
                  lineHeight: 1.2,
                  fontWeight: 800,
                  textTransform: "capitalize",
                  color: "#ffffff",
                  textShadow: "2px 4px 15px rgba(0, 0, 0, 0.95), 0px 0px 30px rgba(0,0,0,0.5)",
                  fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.1s",
                  opacity: 0 // Initial state before animation running
                }}
              >
                Exquisite Designs For <br />
                Your Special Day! <br />
                <Box component="span" sx={{ color: "#ffca43", textDecoration: "underline", decorationColor: "rgba(255,202,67,0.5)" }}>
                  Royal Aari
                </Box> Blouses
              </Typography>

              {/* Intro Sub-text */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  maxWidth: "540px",
                  color: "#ffffff",
                  fontWeight: 500,
                  textShadow: "1px 2px 10px rgba(0, 0, 0, 0.95), 1px 1px 2px rgba(0, 0, 0, 0.9)",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                  opacity: 0
                }}
              >
                Perfectly customized Cutwork, Zardosi, Thread Work, and shimmering Stone Work tailored 
                precisely for your Muhurtham, Reception, and Festive occasions. 
                We guarantee a 100% flawless custom fitting!
              </Typography>

              {/* Conversion Highlight Box */}
              <Box
                sx={{
                  padding: "20px",
                  maxWidth: "500px",
                  borderRadius: "20px",
                  border: "1px solid #ffca43",
                  background: "rgba(51, 3, 3, 0.85)", // Dark solid background for clear readability
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.3s",
                  opacity: 0
                }}
              >
                <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 700, mb: 0.5, color: "#ffca43", display: 'flex', alignItems: 'center', gap: 1 }}>
                  🛍️ Muhurtham Booking Offer!
                </Typography>
                <Typography variant="body2" sx={{ color: "#ffffff", fontSize: "14px", lineHeight: 1.5, fontWeight: 400 }}>
                  Book your slot this month and receive a <strong>Complimentary Waist Belt (Vaddanam)</strong> or custom Latkans completely free! Online measurements and direct fitting sessions are available.
                </Typography>
              </Box>

              {/* Call To Actions */}
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2.5} 
                sx={{ 
                  pt: 1,
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.4s",
                  opacity: 0
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    padding: "14px 32px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, #ffca43 0%, #e09b00 100%)",
                    color: "#2f0303",
                    boxShadow: "0 10px 25px rgba(224, 155, 0, 0.4)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      background: "linear-gradient(135deg, #ffd76e 0%, #fcae00 100%)",
                      boxShadow: "0 14px 30px rgba(224, 155, 0, 0.6)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Order on WhatsApp
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "12px",
                    padding: "14px 32px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(4px)",
                    "&:hover": {
                      borderColor: "#ffca43",
                      color: "#460606",
                      backgroundColor: "rgba(255, 202, 67, 0.15)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  View Collections
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Stack 
                direction="row" 
                spacing={5} 
                sx={{ 
                  pt: 2, 
                  borderTop: "1px solid rgba(255,255,255,0.3)", 
                  maxWidth: "450px",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.5s",
                  opacity: 0
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#ffca43", textShadow: "1px 2px 4px #000" }}>500+</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.08em", color: "#ffffff", fontWeight: 600, textTransform: "uppercase" }}>Happy Brides</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#ffca43", textShadow: "1px 2px 4px #000" }}>15+ Yrs</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.08em", color: "#ffffff", fontWeight: 600, textTransform: "uppercase" }}>Craftsmanship</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#ffca43", textShadow: "1px 2px 4px #000" }}>Fast</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.08em", color: "#ffffff", fontWeight: 600, textTransform: "uppercase" }}>On-Time Delivery</Typography>
                </Box>
              </Stack>

            </Stack>
          </Grid>

          {/* RIGHT SIDE - FLOATING PREVIEW SLIDER */}
          <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: "flex", justifyContent: "center", order: { xs: -1, md: 1 } }}>
            <Box sx={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "380px",
                  aspectRatio: "3 / 4",
                  borderRadius: "30px",
                  padding: "12px",
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 210, 106, 0.4)",
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.8)",
                  overflow: "hidden",
                }}
              >
                {images.map((src, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <Box
                      key={index}
                      sx={{
                        position: "absolute",
                        inset: "12px",
                        borderRadius: "22px",
                        overflow: "hidden",
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(1.06)",
                        transition: "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
                      }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={`Aari Embroidery ${index + 1}`}
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  );
                })}

                {/* Slider Indicators */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
                >
                  {images.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: index === activeIndex ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "999px",
                        background: index === activeIndex ? "#ffca43" : "rgba(255, 255, 255, 0.4)",
                        boxShadow: index === activeIndex ? "0 0 10px #ffca43" : "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Floating Badges */}
              {!isMobile && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15%",
                      right: "-15px",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#350909",
                      border: "1px solid #ffca43",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffca43",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                      animation: "floatY 5s ease-in-out infinite alternate",
                      "@keyframes floatY": { from: { transform: "translateY(0)" }, to: { transform: "translateY(-15px)" } }
                    }}
                  >
                    Custom Necklines
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "15%",
                      left: "-25px",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#350909",
                      border: "1px solid #ffca43",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffca43",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                      animation: "floatY 5s ease-in-out infinite alternate",
                      animationDelay: "1.5s",
                    }}
                  >
                    Premium Beads & Jari
                  </Box>
                </>
              )}
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
    <Services/>
    <Collection isFullView="{false}"/>
    <Review/>

    </>
  );
}

export default Home;