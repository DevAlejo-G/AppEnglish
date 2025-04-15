import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsHumanBody/l2.js";

const tituloLeccion = "Tronco P2: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-2-p3";



function Leccion2HumanBodyP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2HumanBodyP2;
