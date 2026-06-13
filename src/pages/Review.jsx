import React from "react";
import { Box, Typography, Card, Avatar, Stack } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

/* ================= CUSTOMER REVIEWS DATA ================= */
const reviewsData = [
  { name: "Meena Sundar", text: "Amazing Aari work! The custom detailing on my bridal blouse was exceptionally neat and perfect.", initial: "M", location: "Chennai" },
  { name: "Divya Ramesh", text: "Very premium finishing and quality! The royal look zardosi work made my wedding outfit stunning.", initial: "D", location: "Madurai" },
  { name: "Kavya Priya", text: "Design exactly matched my expectation! The hand embroidery detail and sleeve fit was absolute masterclass.", initial: "K", location: "Coimbatore" },
  { name: "Anitha Raj", text: "Best bridal boutique experience ever! Professional timeline delivery and pristine metallic stitch quality.", initial: "A", location: "Trichy" },
  { name: "Revathi K", text: "Elegant classic designs and perfect fitting! Strongly recommend their professional level classes too.", initial: "R", location: "Salem" },
  { name: "Priya Dharshini", text: "Royal bridal look was just amazing! Every single bead and crystal stone was firmly and cleanly tucked.", initial: "P", location: "Tirunelveli" }
];

function Review() {
  const infiniteReviews = [...reviewsData, ...reviewsData];

  return (
    <Box
      id="reviews"
      component="section"
      sx={{
        // FIXED BACKGROUND IMAGE WITH ROYAL GRADIENT OVERLAY
        backgroundImage: `linear-gradient(rgba(17, 0, 5, 0.9), rgba(26, 5, 8, 0.95)), url('/42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Smooth parallax effect tharum
        py: { xs: 8, md: 12 },
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* HEADER SECTION */}
      <Stack spacing={1} sx={{ mb: 8, textAlign: "center", alignItems: "center" }}>
        <Typography 
          sx={{ color: "#ffca43", letterSpacing: "3px", fontSize: "11px", fontWeight: 700 }}
        >
          TESTIMONIALS
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: { xs: "26px", md: "38px" }, 
            fontWeight: 800,
            color: "#fff"
          }}
        >
          Love From Our Royal Brides
        </Typography>
        <Box sx={{ width: "60px", height: "2px", backgroundColor: "#ffca43", mt: 1 }} />
      </Stack>

      {/* INFINITE MARQUEE SLIDER CONTAINER */}
      <Box 
        sx={{ 
          width: "100%", 
          overflow: "hidden", 
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: { xs: "50px", md: "150px" },
            height: "100%",
            zIndex: 3,
            pointerEvents: "none"
          },
          "&::before": {
            left: 0,
            background: "linear-gradient(90deg, #110005 0%, transparent 100%)"
          },
          "&::after": {
            right: 0,
            background: "linear-gradient(-90deg, #110005 0%, transparent 100%)"
          }
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            width: "max-content",
            gap: 3,
            animation: "marquee 25s linear infinite",
            "&:hover": {
              animationPlayState: "paused"
            }
          }}
        >
          {infiniteReviews.map((review, idx) => (
            <Card
              key={idx}
              sx={{
                width: { xs: "280px", md: "360px" },
                background: "rgba(17, 0, 5, 0.7)", // Blurry dark maroon look
                border: "1px solid rgba(255, 202, 67, 0.15)",
                borderRadius: "16px",
                padding: { xs: "24px 20px", md: "30px 24px" },
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#ffca43",
                  boxShadow: "0 10px 25px rgba(255, 202, 67, 0.15)"
                }
              }}
            >
              {/* Stars & Verified Label */}
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography sx={{ color: "#ffca43", fontSize: "14px", letterSpacing: "1px" }}>
                  ⭐⭐⭐⭐⭐
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "rgba(255,255,255,0.4)" }}>
                  <VerifiedUserIcon sx={{ fontSize: "14px", color: "#ffca43" }} />
                  <Typography sx={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.5px" }}>VERIFIED</Typography>
                </Stack>
              </Stack>

              {/* Review Text */}
              <Typography 
                sx={{ 
                  fontSize: { xs: "13px", md: "14.5px" }, 
                  color: "rgba(255, 255, 255, 0.8)", 
                  lineHeight: 1.6, 
                  fontStyle: "italic",
                  mb: 3,
                  flexGrow: 1 
                }}
              >
                "{review.text}"
              </Typography>

              {/* Client Info Block */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar 
                  sx={{ 
                    bgcolor: "rgba(255, 202, 67, 0.1)", 
                    color: "#ffca43", 
                    fontWeight: 700,
                    fontSize: "14px",
                    border: "1px solid rgba(255, 202, 67, 0.3)",
                    width: 38,
                    height: 38
                  }}
                >
                  {review.initial}
                </Avatar>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>
                    {review.name}
                  </Typography>
                  <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                    {review.location}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>

      {/* CSS KEYFRAMES */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
        `}
      </style>
    </Box>
  );
}

export default Review;