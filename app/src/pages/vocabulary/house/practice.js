import React from "react";
import { Box } from "@mui/material";
import LanguageLearningInterface from "hooks/setUpPractice/LanguageLearningInterface";
import lecciones from "./wordsHouse/all.js";

const tituloSeccion = "House";

const PracticeHouse = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <LanguageLearningInterface tituloSeccion={tituloSeccion} lecciones={lecciones} />
    </Box>
  );
};


export default PracticeHouse;

//poner la ruta