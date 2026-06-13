import React from "react";
import { Container, Typography, Box, Card, CardContent, Button, CardMedia, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const classDetails = [
  {
    title: "Basic Aari Course",
    duration: "1 Month",
    modes: ["Online", "Offline"],
    features: ["15+ Basic Stitches", "Tracing Methods", "Blouse Marking Basics", "Flexible Batch Timings"],
    price: "₹10,000",
    icon: <SchoolIcon sx={{ fontSize: 32 }} />
  },
  {
    title: "Advanced Bridal Course",
    duration: "1.5 Months",
    modes: ["Online", "Offline"],
    features: ["Zardosi & Cut Work", "3D Elegant Designs", "Patch Work Secrets", "Material Kit Guidance"],
    price: "₹15,000",
    icon: <StarIcon sx={{ fontSize: 32 }} />
  },
  {
    title: "Professional Master Course",
    duration: "2.5 Months",
    modes: ["Online", "Offline"],
    features: ["Basic + Advanced Full Course", "Boutique Business Guidance", "ISO Certified Certificate", "Lifetime Group Support"],
    price: "₹20,000",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32 }} />
  }
];

const videoUrl = "/video/Untitled design.mp4";

function AariClass() {
  return (
    <Box
      id="aari-class"
      sx={{
        backgroundImage: `linear-gradient(rgba(17, 0, 5, 0.85), rgba(13, 0, 5, 0.9)), url('/42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "#fff",
        py: 10,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="xl">
        
        {/* ஹேடிங் பகுதி */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              textTransform: "uppercase"
            }}
          >
            Our Professional Aari Classes
          </Typography>
          <Typography sx={{ color: "#ccc", fontSize: "16px", maxWidth: "600px", mx: "auto" }}>
            Learn the traditional art of Aari embroidery from experts. Choose your comfortable learning mode and start your boutique journey.
          </Typography>
          <Box sx={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ffca43, transparent)", mx: "auto", mt: 3 }} />
        </Box>

        {/* மெயின் லேஅவுட் பாக்ஸ் */}
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 5, 
            alignItems: "center", 
            width: "100%"
          }}
        >
          
          {/* 1. மேல் பகுதி: வீடியோ கார்டு */}
          <Box 
            sx={{ 
              width: { xs: "100%", sm: "85%", md: "65%" }, 
              display: "flex" 
            }}
          >
            <Card
              sx={{
                width: "100%",
                border: "1px solid rgba(255, 202, 67, 0.25)",
                borderRadius: "24px", 
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: { xs: "250px", sm: "350px", md: "420px" }, 
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
                transition: "all 0.4s ease",
                "&:hover": {
                  borderColor: "#ffca43",
                  boxShadow: "0 15px 45px rgba(255, 202, 67, 0.2)",
                }
              }}
            >
              <CardMedia
                component="video" autoPlay loop muted playsInline src={videoUrl}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to bottom, rgba(17,0,5,0.05) 50%, #110005 95%)", pointerEvents: "none" }} />
              
              <Box sx={{ p: 4, position: "absolute", bottom: 0, left: 0, width: "100%", boxSizing: "border-box", zIndex: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: "#ffca43", mb: 0.5 }}>
                  Live Training Studio
                </Typography>
                <Typography variant="body2" sx={{ color: "#eee", maxWidth: "450px", lineHeight: 1.4 }}>
                  Experience personalized individual attention, smart online live screens, and hands-on offline boutique practice.
                </Typography>
              </Box>
            </Card>
          </Box>

          {/* 2. கீழ் பகுதி: 3 கோர்ஸ் கார்டுகள் */}
          <Box 
            sx={{ 
              width: "100%", 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" }, 
              gap: 3 
            }}
          >
            {classDetails.map((course, index) => (
              <Card
                key={index}
                sx={{
                  flex: 1,
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column", 
                  border: "1px solid rgba(255, 202, 67, 0.15)",
                  transition: "all 0.4s ease",
                  
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `fadeInUp 0.5s ease forwards ${index * 0.15}s`,
                  "@keyframes fadeInUp": { to: { opacity: 1, transform: "translateY(0)" } },

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(255, 202, 67, 0.25)",
                    borderColor: "#ffca43",
                    "& .icon-box": { transform: "scale(1.1) rotate(10deg)" }
                  }
                }}
              >
                <CardMedia
                  component="video" autoPlay loop muted playsInline src={videoUrl}
                  sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                
                <Box 
                  sx={{ 
                    position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
                    background: "linear-gradient(135deg, rgba(26, 5, 8, 0.94) 0%, rgba(17, 0, 5, 0.98) 100%)",
                    backdropFilter: "blur(2px)",
                    zIndex: 1 
                  }} 
                />

                <CardContent sx={{ p: 3, py: 4, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100%", zIndex: 2, position: "relative" }}>
                  
                  {/* Icon Box */}
                  <Box
                    className="icon-box"
                    sx={{
                      color: "#ffca43", mb: 2, transition: "all 0.4s ease",
                      background: "rgba(255,202,67,0.05)", p: 1.5, borderRadius: "50%",
                      border: "1px dashed rgba(255,202,67,0.3)", display: "flex"
                    }}
                  >
                    {course.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 1, fontSize: "17px", lineHeight: 1.3 }}
                  >
                    {course.title}
                  </Typography>

                  {/* Duration */}
                  <Typography sx={{ color: "#ffca43", fontSize: "13px", fontWeight: 600, mb: 1.5 }}>
                    {course.duration}
                  </Typography>

                  {/* ONLINE & OFFLINE BADGES */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2.5 }}>
                    {course.modes.map((mode, mIndex) => (
                      <Typography
                        key={mIndex}
                        sx={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#fff",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          padding: "2px 10px",
                          borderRadius: "4px",
                          letterSpacing: "0.5px"
                        }}
                      >
                        {mode.toUpperCase()}
                      </Typography>
                    ))}
                  </Stack>

                  {/* Features List */}
                  <Box sx={{ width: "100%", textAlign: "left", mb: 3, flexGrow: 1 }}>
                    {course.features.map((feature, fIndex) => (
                      <Typography
                        key={fIndex}
                        sx={{ fontSize: "14px", color: "#ddd", mb: 1, display: "flex", alignItems: "flex-start", gap: 1, lineHeight: 1.4 }}
                      >
                        <span style={{ color: "#ffca43" }}>✨</span>
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  {/* Price & Action Button */}
                  <Box sx={{ width: "100%", mt: "auto" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: "#fff", fontSize: "18px" }}>
                      {course.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: "rgba(255, 202, 67, 0.4)", color: "#ffca43", fontWeight: 700, fontSize: "12px",
                        borderRadius: "8px", py: 1, transition: "all 0.3s",
                        "&:hover": {
                          borderColor: "#ffca43", backgroundColor: "#ffca43", color: "#110005",
                          boxShadow: "0 4px 12px rgba(255, 202, 67, 0.3)"
                        }
                      }}
                    >
                      ENQUIRE NOW
                    </Button>
                  </Box>

                </CardContent>
              </Card>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default AariClass;