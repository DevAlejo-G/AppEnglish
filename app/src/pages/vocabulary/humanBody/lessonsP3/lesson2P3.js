import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsHumanBody/l2.js";

const tituloLeccion = "Tronco P3: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-3";



function Leccion2HumanBodyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2HumanBodyP3;
