import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsHumanBody/l5.js";

const tituloLeccion = "Órganos y Partes Internas P3: Human Body";
const linkSiguiente = "/vocabulary/humanBody";



function Leccion5HumanBodyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5HumanBodyP3;
