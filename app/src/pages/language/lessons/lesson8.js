import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsEnglish+300/l8.js";

const tituloLeccion = "Lección 8: English +300";
const linkSiguiente = "/english+300/leccion-8-p2";



function Leccion8EnglishPlus300() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8EnglishPlus300;
