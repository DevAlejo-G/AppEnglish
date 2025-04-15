import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsEnglish+300/l12.js";

const tituloLeccion = "Lección 12: English +300";
const linkSiguiente = "/english+300/leccion-12-p2";



function Leccion12EnglishPlus300() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion12EnglishPlus300;
