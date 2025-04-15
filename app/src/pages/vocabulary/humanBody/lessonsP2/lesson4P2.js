import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsHumanBody/l4.js";

const tituloLeccion = "Extremidades Inferiores P2: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-4-p3";



function Leccion4HumanBodyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4HumanBodyP2;
