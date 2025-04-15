import React from "react";
import { Box } from "@mui/material";
import LanguageLearningInterface from "hooks/setUpPractice/LanguageLearningInterface";
import lecciones from "./wordsProfessions/all.js";

const tituloSeccion = "Professions";

const PracticeProfessions = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <LanguageLearningInterface tituloSeccion={tituloSeccion} lecciones={lecciones} />
    </Box>
  );
};


export default PracticeProfessions;