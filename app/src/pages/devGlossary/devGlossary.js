import React from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { 
  IoHomeOutline, IoRestaurantOutline, IoShirtOutline, IoColorPaletteOutline, 
  IoPersonOutline, IoDesktopOutline, IoPeopleOutline, IoFootballOutline
} from "react-icons/io5";

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
  }
}));

const IconWrapper = styled(IconButton)(({ theme }) => ({
  fontSize: "2.5rem",
  marginBottom: "10px",
  color: "#4A90E2", // Azul más suave
  "&:hover": {
    backgroundColor: "transparent",
    color: "#357ABD" // Un poco más oscuro al pasar el mouse
  }
}));


const DevGlossary = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: IoHomeOutline, label: "Node.js", id: "node.js" },
    { icon: IoDesktopOutline, label: "JavaScript", id: "javascript" },
    { icon: IoRestaurantOutline, label: "Data Base", id: "database" },
    { icon: IoPeopleOutline, label: "Terminology", id: "terminology" },
    { icon: IoShirtOutline, label: "", id: "" },
    { icon: IoPersonOutline, label: " ", id: "" },
    { icon: IoColorPaletteOutline, label: "", id: "" },
    { icon: IoFootballOutline, label: "", id: "" },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/dev-glossary/${category.id}`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: "1200px", margin: "0 auto", pb: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ textAlign: "center", mb: 4 }}
      >
        Dev Glossary
      </Typography>

      <Grid container spacing={3} sx={{ paddingBottom: "50px" }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <CategoryCard
              elevation={3}
              onClick={() => handleCategoryClick(category)}
              role="button"
              aria-label={`View ${category.label} vocabulary`}
              tabIndex={0}
            >
              <IconWrapper aria-hidden="true" disableRipple>
                {category.icon ? React.createElement(category.icon) : null}
              </IconWrapper>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "medium" }}
              >
                {category.label}
              </Typography>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DevGlossary;
