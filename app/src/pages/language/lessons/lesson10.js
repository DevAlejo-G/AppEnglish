import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsEnglish+300/l10.js";

const tituloLeccion = "Lección 10: English +300";
const linkSiguiente = "/english+300/leccion-10-p2";



function Leccion10EnglishPlus300() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion10EnglishPlus300;
