import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsHumanBody/l4.js";


const tituloLeccion = "Extremidades Inferiores P3: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-5";



function Leccion4HumanBodyP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4HumanBodyP3;
