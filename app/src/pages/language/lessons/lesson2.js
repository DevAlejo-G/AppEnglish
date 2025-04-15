import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsEnglish+300/l2.js";

const tituloLeccion = "Lección 2: English +300";
const linkSiguiente = "/english+300/leccion-2-p2";



function Leccion2EnglishPlus300() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2EnglishPlus300;
