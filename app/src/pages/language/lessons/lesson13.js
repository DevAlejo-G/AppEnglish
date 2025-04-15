import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsEnglish+300/l13.js";

const tituloLeccion = "Lección 13: English +300";
const linkSiguiente = "/english+300/leccion-13-p2";



function Leccion13EnglishPlus300() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion13EnglishPlus300;
