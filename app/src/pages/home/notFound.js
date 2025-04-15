import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, keyframes, styled } from "@mui/material";
import { BiHome } from "react-icons/bi";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  textAlign: "center",
}));

const AnimatedBox = styled(Box)({
  animation: `${float} 3s ease-in-out infinite`,
});

const NumberBox = styled(Box)({
  position: "relative",
  "&::after": {
    content: '"404"',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: "12rem",
    zIndex: -1,
  },
});

const RotatingCircle = styled(Box)({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "4px solid #3f51b5",
  borderTopColor: "transparent",
  animation: `${rotate} 2s linear infinite`,
  margin: "2rem auto",
});

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 4),
  borderRadius: "25px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[4],
  },
}));

const messages = [
  "Oops! Looks like you've wandered into uncharted territory.",
  "Houston, we have a problem! This page is lost in space.",
  "Whoops! This page is playing hide and seek.",
  "Well, this is awkward... The page you're looking for is missing.",
];

const NotFound = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []); // Dependencias vacías para evitar warning

  return (
    <StyledContainer maxWidth="sm">
      <AnimatedBox>
        <NumberBox>
          <Typography
            variant="h1"
            sx={{
              fontSize: "8rem",
              fontWeight: 900,
              color: "#3f51b5",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            404
          </Typography>
        </NumberBox>
        <RotatingCircle />
        <Typography variant="h5" sx={{ mb: 4, color: "#666", fontWeight: 500 }}>
          {message}
        </Typography>
        <Box>
          <ActionButton
            variant="contained"
            color="primary"
            startIcon={<BiHome size={20} />}
            aria-label="Go to Home Page"
            onClick={() => navigate("/")}
          >
            Return Home
          </ActionButton>
        </Box>
      </AnimatedBox>
    </StyledContainer>
  );
};

export default NotFound;