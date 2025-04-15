import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsHumanBody/l5.js";

const tituloLeccion = "Órganos y Partes Internas P2: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-5-p3";



function Leccion5HumanBodyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5HumanBodyP2;
