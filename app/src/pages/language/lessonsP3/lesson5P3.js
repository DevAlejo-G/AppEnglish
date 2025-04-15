import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsEnglish+300/l5.js";

const tituloLeccion = "Lección 5 P3: English +300";
const linkSiguiente = "/english+300/leccion-6"; //primeraPractica



function Leccion5P3EnglishPlus300() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5P3EnglishPlus300;
