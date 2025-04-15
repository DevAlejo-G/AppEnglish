import React from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AutoFixHigh, AutoStories } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.background.paper,
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
    color: theme.palette.primary.main,
  },
}));

const Verbs = () => {
  const navigate = useNavigate();

  const verbTypes = [
    {
      title: "Regular Verbs",
      description: "Learn commonly used regular verbs and their conjugations",
      icon: <AutoFixHigh />, 
      route: "/verbs/regular",
    },
    {
      title: "Irregular Verbs",
      description: "Master the essential irregular verbs and their unique patterns",
      icon: <AutoStories />, 
      route: "/verbs/irregular",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Select Verb Type
      </Typography>

      <Grid container spacing={4} sx={{ paddingBottom: "50px" }}>
        {verbTypes.map((type, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledCard
              onClick={() => navigate(type.route)}
              role="button"
              aria-label={`Select ${type.title}`}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") navigate(type.route);
              }}
            >
              <IconWrapper>{type.icon}</IconWrapper>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
              >
                {type.title}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                sx={{ maxWidth: "80%" }}
              >
                {type.description}
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Verbs;
