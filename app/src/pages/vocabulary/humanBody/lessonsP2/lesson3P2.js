import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsHumanBody/l3.js";

const tituloLeccion = "Extremidades Superiores P2: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-3-p3";



function Leccion3HumanBodyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3HumanBodyP2;
