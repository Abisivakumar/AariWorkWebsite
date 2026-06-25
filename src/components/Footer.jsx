import React from "react";
import { Box, Container, Typography, Stack, Link } from "@mui/material";
import Grid from "@mui/material/Grid"; // நவீன மற்றும் வேகமான Grid2 பயன்பாடு
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a0202", // ராயல் டார்க் மெரூன் / பிளாக்
        color: "#fff",
        position: "relative",
        pt: 8,
        pb: 4,
        
        // Top Glowing Animated Border Line
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffca43, transparent)",
          backgroundSize: "200% 100%",
          "@keyframes moveLine": {
            "0%": { backgroundPosition: "200% 0" },
            "100%": { backgroundPosition: "-200% 0" }
          },
          animation: "moveLine 4s linear infinite"
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 4 }} justifyContent="space-between" alignItems="flex-start">
          
          {/* COLUMN 1: FLOWER MANDALA LOGO & BRAND DESCRIPTION */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box 
              sx={{ 
                display: "inline-flex", 
                flexDirection: "column", 
                alignItems: { xs: "center", md: "flex-start" },
                cursor: "pointer",
                "&:hover .flower-petal": {
                  transform: "scale(1.1) rotate(15deg)",
                  filter: "drop-shadow(0px 0px 10px rgba(252, 246, 186, 0.6))"
                }
              }}
            >
              {/* Floral Wreath Ring */}
              <Box
                sx={{
                  position: "relative",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    border: "1px dashed rgba(255, 202, 67, 0.3)",
                  }
                }}
              >
                {/* 8 மலர் இதழ்கள் */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, index) => (
                  <Box
                    key={index}
                    className="flower-petal"
                    sx={{
                      position: "absolute",
                      transform: `rotate(${deg}deg) translateY(-34px)`,
                      transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocalFloristIcon 
                      sx={{ 
                        fontSize: "16px",
                        background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }} 
                    />
                  </Box>
                ))}

                {/* சென்டரில் 'RA' */}
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    position: "absolute",
                    zIndex: 2,
                    background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 30%, #B38728 70%, #AA771C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.4))"
                  }}
                >
                  YA
                </Typography>
              </Box>

              {/* பிராண்ட் பெயர் */}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mt: 1.5,
                  background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                YAZHINI BOUTIQUE
              </Typography>
            </Box>
            
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mt: 2, pr: { md: 4 }, lineHeight: 1.6 }}>
              Get in touch with us today and avail free custom latkans with your muhurtham order! Handcrafted elegance tailored for your special day.
            </Typography>
          </Grid>

          {/* COLUMN 2: QUICK LINKS */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="subtitle1" sx={{ fontFamily: "serif", fontWeight: 700, color: "#ffca43", mb: 2.5, letterSpacing: "0.05em" }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5} alignItems={{ xs: "center", sm: "flex-start" }}>
              {["Home", "About Us", "Our Designs", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "14px",
                    transition: "all 0.3s",
                    "&:hover": { color: "#ffca43", paddingLeft: "6px" }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 3: CONTACT INFO */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="subtitle1" sx={{ fontFamily: "serif", fontWeight: 700, color: "#ffca43", mb: 2.5, letterSpacing: "0.05em" }}>
              Contact Us
            </Typography>
            <Stack spacing={2} alignItems={{ xs: "center", sm: "flex-start" }}>
              
              {/* Phone Line */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{pl:{xs:5,md:0}}}>
                <PhoneIcon sx={{ color: "#ffca43", fontSize: "20px" }} />
                <Link href="tel:+91996556730" underline="none" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", "&:hover": { color: "#fff" } }}>
                  +91 99655 67320
                </Link>
              </Stack>

              {/* WhatsApp Line */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{pl:{xs:5,md:0}}}>
                <WhatsAppIcon sx={{ color: "#25D366", fontSize: "20px" }} />
                <Link href="https://wa.me/91996556730" target="_blank" underline="none" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", "&:hover": { color: "#fff" } }}>
                  Chat on WhatsApp
                </Link>
              </Stack>

              {/* Address Line */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ textAlign: "left" ,pl:{xs:5,md:0}}}>
                <LocationOnIcon sx={{ color: "#ffca43", fontSize: "22px", mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.5, }}>
                  Royal Aari Bridal Atelier,<br />
                   Tamil Nadu, India.
                </Typography>
              </Stack>

            </Stack>
          </Grid>

        </Grid>

        {/* COPYRIGHT SECTION */}
        <Box 
          sx={{ 
            borderTop: "1px solid rgba(255,255,255,0.08)", 
            mt: 6, 
            pt: 3, 
            textAlign: "center" 
          }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            © 2026 Royal Aari. Handcrafted Elegance. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;