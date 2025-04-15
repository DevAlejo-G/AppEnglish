import React from "react";
import { Box } from "@mui/material";
import LanguageLearningInterface from "hooks/setUpPractice/LanguageLearningInterface";
import lecciones from "./wordsAnimals/all.js";

const tituloSeccion = "Animals";

const PracticeAnimals = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <LanguageLearningInterface tituloSeccion={tituloSeccion} lecciones={lecciones} />
    </Box>
  );
};


export default PracticeAnimals;