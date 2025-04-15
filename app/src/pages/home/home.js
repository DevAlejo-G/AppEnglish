import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { FaBook, FaLanguage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
  color: "#2e2e2e",
  transition: "all 0.3s ease-in-out",
  height: "100%",
  cursor: "pointer",
  background: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)"
  }
});

const IconWrapper = styled(Box)({
  fontSize: "3rem",
  marginBottom: "1rem",
  display: "flex",
  justifyContent: "center",
  color: "#64b5f6"
});

const StyledButton = styled(Button)({
  background: "#bbdefb",
  color: "#2e2e2e",
  borderRadius: "25px",
  padding: "10px 30px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "#90caf9",
    transform: "translateY(-2px)"
  }
});

const MainContainer = styled(Container)({
  paddingTop: "2rem",
  paddingBottom: "4rem",
});

const learningModules = [
  {
    title: "Vocabulary Builder",
    description: "Expand your vocabulary with contextual learning and interactive exercises",
    icon: <FaBook />,
    color: "#ffffff",
    route: "/vocabulary"
  },
  {
    title: "Study the Verbs",
    description: "Practice real-world conversations with interactive dialogue scenarios",
    icon: <FaLanguage />,
    color: "#f0f4ff",
    route: "/verbs"
  }
];

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MainContainer maxWidth="lg">
      <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 4,
            pt: 2,
            background: "linear-gradient(45deg, #bbdefb 30%, #64b5f6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Master Any Language
        </Typography>

        <Grid container spacing={4}>
          {learningModules.map((module, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} component={motion.div} variants={itemVariants}>
              <StyledCard onClick={() => navigate(module.route)}>
                <CardContent>
                  <IconWrapper>{module.icon}</IconWrapper>
                  <Typography variant="h5" component="h2" gutterBottom align="center">
                    {module.title}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                    {module.description}
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <StyledButton variant="contained" size="large">
                      Start Learning
                    </StyledButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainContainer>
  );
};

export default Home;
