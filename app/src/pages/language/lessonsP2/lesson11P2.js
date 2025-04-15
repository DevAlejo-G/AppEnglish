import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsEnglish+300/l11.js";

const tituloLeccion = "Lección 11 P2: English +300";
const linkSiguiente = "/english+300/leccion-11-p3";



function Leccion11P2EnglishPlus300() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion11P2EnglishPlus300;
