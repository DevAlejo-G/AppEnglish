import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsHumanBody/l3.js";

const tituloLeccion = "Extremidades Superiores P3: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-4";



function Leccion3HumanBodyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3HumanBodyP3;
