import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsHumanBody/l1.js";

const tituloLeccion = "Cabeza y Cara P3: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-2";



function Leccion1HumanBodyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1HumanBodyP3;
