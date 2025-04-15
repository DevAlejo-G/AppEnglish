import React from "react";
import { Box } from "@mui/material";
import LanguageLearningInterface from "hooks/setUpPractice/LanguageLearningInterface";
import lecciones from "./wordsRegular/all.js";

const tituloSeccion = "Verbs Regular";

const PracticeVerbRegular = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <LanguageLearningInterface tituloSeccion={tituloSeccion} lecciones={lecciones} />
    </Box>
  );
};


export default PracticeVerbRegular;