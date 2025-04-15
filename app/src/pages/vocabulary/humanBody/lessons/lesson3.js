import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsHumanBody/l3.js";

const tituloLeccion = "Extremidades Superiores: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-3-p2";



function Leccion3HumanBody() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3HumanBody;
