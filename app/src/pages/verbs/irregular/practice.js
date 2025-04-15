import React from "react";
import { Box } from "@mui/material";
import LanguageLearningInterface from "hooks/setUpPractice/LanguageLearningInterface";
import lecciones from './wordsIrregular/all.js'; //debes poner el .js

const tituloSeccion = "Verbs Irregular";

const PracticeVerbIrregular = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <LanguageLearningInterface lecciones={lecciones} tituloSeccion={tituloSeccion} />
    </Box>
  );
};

export default PracticeVerbIrregular;
