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

const images = [
  "lehangaback.jpg", 
  "Aari.jpg", 
  "Yellow.jpg",  
  "purpule.jpg",
  "lehangafront.jpg",
  "saree.jpg"
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Pinyon+Script&family=Poppins:wght@300;400;600;700&display=swap');
      `}
    </style>

    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "82vh" },
        padding: { xs: "40px 20px", md: "25px 80px" },
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        backgroundImage: ` url('42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "@keyframes fadeInUp": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        }
      }}
    >
      {/* Background Ambient Glow */}
      <Box
        sx={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.25,
          pointerEvents: "none",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #ffca43 0%, rgba(0,0,0,0) 70%)",
          top: "-10%",
          left: "-5%",
          zIndex: 0,
        }}
      />

      {/* Main Inner Container */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1240px" }}>
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
          
          {/* LEFT SIDE CONTENT */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={2.2}>
              
              <Box sx={{ display: "flex", alignItems: "center", animation: "fadeInUp 0.6s ease-out forwards" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                       color: "#310303", // Clear gold visibility
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textShadow: "0px 1px 1px rgba(0,0,0,0.8)"
                  }}
                >
                  ✨ Exclusive Bridal Boutique
                  <Box
                    component="span"
                    sx={{
                      padding: "3px 12px",
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

              {/* Typography Row Section */}
              <Box
                sx={{
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.1s",
                  opacity: 0,
                  display: "flex",
                  flexDirection: "column",
                  
                }}
              >
                {/* Row 1 */}
                <Box sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "30px", sm: "48px", md: "56px" },
                      fontWeight: 400,
                      color: "#370404",// White font for crisp look on dark bg
                      letterSpacing: "-0.01em",
                      marginRight: { xs: "12px", md: "16px" },
                    }}
                  >
                    Exquisite
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Pinyon Script', cursive",
                      fontSize: { xs: "40px", sm: "64px", md: "74px" },
                       color: "#765912",// Gold script
                      textTransform: "none",
                      display: "inline-block",
                      transform: "translateY(2px)",
                    }}
                  >
                    Designs
                  </Typography>
                </Box>

                {/* Row 2 */}
                <Box sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", mt: { xs: "-10px", md: "-20px" }, }}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "30px", sm: "48px", md: "56px" },
                      fontWeight: 400,
                      color: "#370404",
                      marginRight: { xs: "10px", md: "14px" },
                    }}
                  >
                    For
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Pinyon Script', cursive",
                      fontSize: { xs: "40px", sm: "64px", md: "74px" },
                      color: "#765912",
                      textTransform: "none",
                      display: "inline-block",
                      marginRight: { xs: "12px", md: "16px" },
                      transform: "translateY(2px)",
                    }}
                  >
                    Your
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "30px", sm: "48px", md: "56px" },
                      fontWeight: 500,
                      color: "#370404",
                    }}
                  >
                    Special Day!
                  </Typography>
                </Box>

                {/* Row 3 */}
                <Box sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap",  mt: { xs: "2px", md: -3 }}}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "30px", sm: "35px", md: "50px" },
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#765912", 
                      textDecoration: "underline", 
                      letterSpacing: "0.02em",
                    }}
                  >
                    Yazhini Boutique
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "30px", sm: "35px", md: "60px" },
                      fontWeight: 400,
                      color: "#370404",
                      ml:{xs:0,md:2}
                      
                    }}
                  >
                    Blouses
                  </Typography>
                </Box>
              </Box>

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

              {/* Offer Promo Box */}
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
                <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: 700, mb: 0.5, color: "#ffca43", display: 'flex', alignItems: 'center', gap: 1, fontFamily: "'Poppins', sans-serif" }}>
                  🛍️ Muhurtham Booking Offer!
                </Typography>
                <Typography variant="body2" sx={{ color: "#f1f5f9", fontSize: "13.5px", lineHeight: 1.5, fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>
                  Book your slot this month and receive a <strong>Complimentary Waist Belt (Vaddanam)</strong> or custom Latkans completely free! Online measurements and direct fitting sessions are available.
                </Typography>
              </Box>

              {/* Buttons Stack */}
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2} 
                sx={{ 
                  pt: 0.5,
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.4s",
                  opacity: 0
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    padding: "12px 30px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "'Poppins', sans-serif",
                    background: "linear-gradient(135deg, #ffca43 0%, #e09b00 100%)",
                    color: "#2f0303",
                    boxShadow: "0 8px 20px rgba(224, 155, 0, 0.25)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      background: "linear-gradient(135deg, #ffd76e 0%, #fcae00 100%)",
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
                    padding: "12px 30px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "'Poppins', sans-serif",
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                    "&:hover": {
                      borderColor: "#ffca43",
                      color: "#ffca43",
                      backgroundColor: "rgba(255, 202, 67, 0.08)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  View Collections
                </Button>
              </Stack>

              {/* FIXED SECTION: High Contrast Colors for Visibility */}
              <Stack 
                direction="row" 
                spacing={{ xs: 2.5, sm: 4.5 }} 
                justifyContent={{ xs: "space-between", sm: "flex-start" }}
                sx={{ 
                  pt: 2, 
                  borderTop: "1px solid rgba(255,255,255,0.2)", 
                  maxWidth: "480px",
                  animation: "fadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.5s",
                  opacity: 0
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#370404", fontFamily: "'Poppins', sans-serif", fontSize: { xs: "20px", sm: "24px" } }}>500+</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.06em", color: "rgba(255,255,255,0.85)", fontWeight: 600, textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", display: "block", mt: 0.5, fontSize: { xs: "10px", sm: "12px" } }}>Happy Brides</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#370404", fontFamily: "'Poppins', sans-serif", fontSize: { xs: "20px", sm: "24px" } }}>15+ Yrs</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.06em", color: "rgba(255,255,255,0.85)", fontWeight: 600, textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", display: "block", mt: 0.5, fontSize: { xs: "10px", sm: "12px" } }}>Craftsmanship</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#370404", fontFamily: "'Poppins', sans-serif", fontSize: { xs: "20px", sm: "24px" } }}>Fast</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: "0.06em", color: "rgba(255,255,255,0.85)", fontWeight: 600, textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", display: "block", mt: 0.5, fontSize: { xs: "10px", sm: "12px" } }}>On-Time Delivery</Typography>
                </Box>
              </Stack>

            </Stack>
          </Grid>

          {/* RIGHT SIDE - FLOATING PREVIEW SLIDER */}
          <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: "flex", justifyContent: "center", order: { xs: -1, md: 1 }, mb: { xs: 2, md: 0 } }}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
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

              {/* FIXED SECTION: Floating Badges now visible in mobile layout too */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-10px", sm: "16%" },
                  right: { xs: "10px", sm: "-20px" },
                  padding: { xs: "8px 14px", sm: "10px 18px" },
                  borderRadius: "10px",
                  backgroundColor: "#350909",
                  border: "1px solid #ffca43",
                  fontSize: { xs: "11px", sm: "12px" },
                  fontWeight: 700,
                  color: "#ffca43",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                  zIndex: 3,
                  animation: "floatY 5s ease-in-out infinite alternate",
                  "@keyframes floatY": { from: { transform: "translateY(0)" }, to: { transform: "translateY(-15px)" } }
                }}
              >
                Custom Necklines
              </Box>
              
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "-10px", sm: "15%" },
                  left: { xs: "10px", sm: "-30px" },
                  padding: { xs: "8px 14px", sm: "10px 18px" },
                  borderRadius: "10px",
                  backgroundColor: "#350909",
                  border: "1px solid #ffca43",
                  fontSize: { xs: "11px", sm: "12px" },
                  fontWeight: 700,
                  color: "#ffca43",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                  zIndex: 3,
                  animation: "floatY 5s ease-in-out infinite alternate",
                  animationDelay: "1.5s",
                }}
              >
                Premium Beads & Jari
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
    <Services/>
    <Collection isFullView={false}/>
    <Review/>
    </>
  );
}

export default Home;