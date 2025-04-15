import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsHumanBody/l1.js";

const tituloLeccion = "Cabeza y Cara P2: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-1-p3";



function Leccion1HumanBodyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1HumanBodyP2;