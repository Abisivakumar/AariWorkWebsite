import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
   Grid, 
  Stack, 
  useTheme, 
  useMediaQuery,
  Card,
  CardContent,
  Avatar
} from "@mui/material";

// Premium Curated Images for Continuity
const aboutImages = {
  artisanWork: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", 
  masterArtisan: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" 
};

function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        padding: { xs: "60px 20px", md: "80px 100px" },
        color: "#ffffff", // Pure white for text contrast
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        // Consistent Dark Luxury Background matching Home page
        backgroundColor: "#1a0109", 
        backgroundImage: `url('42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26, 1, 9, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)",
          zIndex: 0,
        },

        // CSS Keyframes for Text Entrance Animations
        "@keyframes aboutFadeInUp": {
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

        
      {/* Ambient Glow Enhancer - Golden Accent */}
      <Box
        sx={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.2,
          pointerEvents: "none",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #ffca43 0%, rgba(0,0,0,0) 70%)",
          bottom: "-10%",
          right: "-5%",
          zIndex: 0,
        }}
      />

      

      {/* Main Inner Container */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1240px" }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">

             
  <Box sx={{ textAlign: "center", width: "100%", mb: 6 }}>
    <Typography sx={{ color: "#ffca43", letterSpacing: "0.2em", fontSize:{xs:"12px",md:"30px"}  }}>
      ABOUT US
    </Typography>

    <Typography variant="h3" sx={{ fontWeight: 500, color: "#fff" }}>
      The Story Behind Royal Aari Boutique
    </Typography>

    <Typography sx={{ color: "#ccc", mt: 1 }}>
      Crafting elegance with tradition & precision
    </Typography>
  </Box>
          
          {/* LEFT SIDE CONTENT - STORY & VALUES */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={3.5}>
              
              {/* Premium Top Tagline */}
              <Box 
                sx={{ 
                  display: "flex",
                  animation: "aboutFadeInUp 0.6s ease-out forwards" 
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#ffca43", // High contrast vivid gold
                    fontWeight: 700,
                    textShadow: "0px 2px 4px rgba(0,0,0,0.8)"
                  }}
                >
                  ✨ Our Craft, Your Legacy
                </Typography>
              </Box>

              {/* Catchy Headline */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "34px", sm: "46px", md: "52px" },
                  lineHeight: 1.2,
                  fontWeight: 800,
                  textTransform: "capitalize",
                  color: "#ffffff",
                  textShadow: "2px 4px 15px rgba(0, 0, 0, 0.95)",
                  fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif",
                  animation: "aboutFadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.1s",
                  opacity: 0
                }}
              >
                Preserving The Royal Art Of <br />
                <Box component="span" sx={{ color: "#ffca43", textDecoration: "underline", decorationColor: "rgba(255,202,67,0.5)" }}>
                  Handcrafted
                </Box> Traditions
              </Typography>

              {/* Story Intro Text */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                  color: "#ffffff",
                  fontWeight: 400,
                  textShadow: "1px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "aboutFadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                  opacity: 0
                }}
              >
                Every bridal blouse we create is a canvas of heritage. At Royal Aari, we bring together generations of master artisans specializing in intricate Zardosi, heavy Cutwork, and shimmering stone detailing. We don’t just customize fits; we stitch pure dedication into your dream attire.
              </Typography>

              {/* Highlight Cards - Core Pillars */}
              <Grid container spacing={2.5} 
                sx={{ 
                  animation: "aboutFadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.3s",
                  opacity: 0
                }}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ background: "rgba(15, 1, 5, 0.85)", border: "1px solid #ffca43", borderRadius: "16px", color: "#fff" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 700, color: "#ffca43", mb: 1 }}>
                        👑 Authentic Artistry
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                        100% handcrafted pieces by traditional experts. No machine shortcuts.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ background: "rgba(15, 1, 5, 0.85)", border: "1px solid #ffca43", borderRadius: "16px", color: "#fff" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 700, color: "#ffca43", mb: 1 }}>
                        🎯 Flawless Fitting
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                        Precision measurements with strict quality checks for absolute comfort.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Action Button */}
              <Stack 
                direction="row"
                sx={{ 
                  pt: 1,
                  animation: "aboutFadeInUp 0.8s ease-out forwards",
                  animationDelay: "0.4s",
                  opacity: 0
                }}
              >
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
                      color: "#ffca43",
                      backgroundColor: "rgba(255, 202, 67, 0.15)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Our Heritage Story
                </Button>
              </Stack>

            </Stack>
          </Grid>

          {/* RIGHT SIDE - FLOATING DISPLAY (MATCHES HERO STRUCTURE) */}
          <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: "flex", justifyContent: "center", order: { xs: -1, md: 1 } }}>
            <Box sx={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              
              {/* Premium Curated Frame Layout */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "380px",
                  borderRadius: "30px",
                  padding: "12px",
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 210, 106, 0.4)",
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.8)",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={aboutImages.masterArtisan}
                  alt="Aari Embroidery Legacy Process"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "22px" }}
                  onError={(e) => {
                    // Fallback source if local file path breaks
                    e.target.src = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </Box>

              {/* Floating Badge Widgets for Visual Hierarchy */}
              {!isMobile && (
                <>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    alignItems="center"
                    sx={{
                      position: "absolute",
                      top: "15%",
                      right: "-15px",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#000000",
                      border: "1px solid #ffca43",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                      animation: "aboutFloatY 5s ease-in-out infinite alternate",
                      "@keyframes aboutFloatY": { from: { transform: "translateY(0)" }, to: { transform: "translateY(-15px)" } }
                    }}
                  >
                    <Avatar src={aboutImages.artisanWork} sx={{ width: 24, height: 24 }} />
                    <Typography variant="caption" sx={{ color: "#ffca43", fontWeight: 700, letterSpacing: '0.05em' }}>
                      100% PURE HANDWORK
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "15%",
                      left: "-25px",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#000000",
                      border: "1px solid #ffca43",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#ffca43",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.8)",
                      animation: "aboutFloatY 5s ease-in-out infinite alternate",
                      animationDelay: "1.5s",
                    }}
                  >
                    ✨ Master Crafters
                  </Box>
                </>
              )}

            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}

export default AboutUs;