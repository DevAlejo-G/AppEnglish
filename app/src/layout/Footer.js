import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-container" component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            mb: 2
          }}
        >
          <Typography className="marquee-text" variant="body1">
          El éxito comienza con determinación!!!
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <IconButton
            className="social-icon-button"
            aria-label="Facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </IconButton>
          <IconButton
            className="social-icon-button"
            aria-label="Twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </IconButton>
          <IconButton
            className="social-icon-button"
            aria-label="Instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </IconButton>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1
          }}
        >
          <MdEmail size={24} style={{ color: "#ffffff" }} />
          <Typography className="contact-text" variant="body1">
          <a href="mailto:ja1268139@gmail.com">ja1268139@gmail.com</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
