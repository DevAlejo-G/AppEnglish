import { styled } from "@mui/system";
import { Card, Box, Button, Typography } from "@mui/material";

export const LessonCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#F8F9FA",
  borderRadius: "10px",
  margin: "20px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
  position: "relative",
  paddingTop: "50px", // Añadir padding superior para evitar superposición del indicador
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)"
  }
}));

export const LessonIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "#1A4B84",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "#2E77D0"
  }
}));

export const PracticeLessonCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#FFFAE6",
  borderRadius: "10px",
  margin: "20px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
  position: "relative",
  paddingTop: "50px", // Añadir padding superior para evitar superposición del indicador
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)"
  }
}));

export const StyledButton = styled(Button)(({ isPractice }) => ({
  backgroundColor: isPractice ? "#FF9800" : "#2E77D0",
  color: "#FFFFFF",
  padding: "10px 28px",
  fontSize: "15px",
  fontWeight: "600",
  borderRadius: "25px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: isPractice ? "#F57C00" : "#1A5BB4",
    transform: "scale(1.05)",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
  }
}));

export const DynamicTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "700",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#1A4B84",
  marginLeft: "12px",
  marginTop: "10px", // Asegurar margen superior
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "44px", // Limitar la altura para evitar que crezca demasiado
  display: "-webkit-box",
  WebkitLineClamp: 2, // Limitar a dos líneas
  WebkitBoxOrient: "vertical",
  wordBreak: "break-word", // Permitir el quiebre de palabras largas
  "&.small": {
    fontSize: "18px"
  },
  "&.smaller": {
    fontSize: "16px"
  }
}));
