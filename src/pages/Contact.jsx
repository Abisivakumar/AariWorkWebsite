import React from "react";
import { Container, Typography, Box, TextField, Button, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";




function Contact() {
  return (
    <Box
      id="contact-section"
      sx={{
        position: "relative",
        backgroundImage: `url('public/42ccfc2b-30a5-4eb1-888e-22aeab05b957.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(26, 1, 9, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        
      
        <Box
          sx={{
            background: "rgba(17, 1, 1, 0.03)", 
            backdropFilter: "blur(16px)", 
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 202, 67, 0.2)", 
            borderRadius: "24px",
            p: { xs: 4, md: 6 },
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
         
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                letterSpacing: "0.05em",
                background: "linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ color: "#ddd", fontSize: "14px" }}>
              Have questions? Get in touch with our team today.
            </Typography>
          </Box>

          <Grid container spacing={4}>
           
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%", justifyContent: "center" }}>
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ bgcolor: "rgba(255, 202, 67, 0.1)", p: 1.5, borderRadius: "50%", display: "flex", color: "#ffca43" }}>
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#aaa", display: "block" }}>Call Us</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" }}>+91 98765 43210</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ bgcolor: "rgba(255, 202, 67, 0.1)", p: 1.5, borderRadius: "50%", display: "flex", color: "#ffca43" }}>
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#aaa", display: "block" }}>Email</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" }}>info@aariclass.com</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ bgcolor: "rgba(255, 202, 67, 0.1)", p: 1.5, borderRadius: "50%", display: "flex", color: "#ffca43" }}>
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#aaa", display: "block" }}>Location</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                      123, Bridal Street, T.Nagar, Chennai.
                    </Typography>
                  </Box>
                </Box>

              </Box>
            </Grid>

            
            <Grid item xs={12} md={7}>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                
                <TextField
                  fullWidth label="Your Name" variant="outlined"
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  inputProps={{ style: { color: "#fff" } }}
                  sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "rgba(255,255,255,0.2)" }, "&:hover fieldset": { borderColor: "#ffca43" } } }}
                />

                <TextField
                  fullWidth label="Phone Number" variant="outlined"
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  inputProps={{ style: { color: "#fff" } }}
                  sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "rgba(255,255,255,0.2)" }, "&:hover fieldset": { borderColor: "#ffca43" } } }}
                />

                <TextField
                  fullWidth label="Your Message" variant="outlined" multiline rows={3}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  inputProps={{ style: { color: "#fff" } }}
                  sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "rgba(255,255,255,0.2)" }, "&:hover fieldset": { borderColor: "#ffca43" } } }}
                />

                <Button
                  variant="contained" fullWidth
                  sx={{
                    background: "linear-gradient(135deg, #BF953F 0%, #AA771C 100%)",
                    color: "#110005", fontWeight: 700, py: 1.2, borderRadius: "8px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #FCF6BA 0%, #BF953F 100%)",
                      boxShadow: "0 5px 15px rgba(255, 202, 67, 0.4)",
                    }
                  }}
                >
                  SEND MESSAGE
                </Button>

              </Box>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </Box>
  );
}

export default Contact;