import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsHumanBody/l4.js";

const tituloLeccion = "Extremidades Inferiores: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-4-p2";



function Leccion4HumanBody() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4HumanBody;
