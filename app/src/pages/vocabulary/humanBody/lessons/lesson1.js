import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsHumanBody/l1.js";

const tituloLeccion = "Cabeza y Cara: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-1-p2";



function Leccion1HumanBody() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1HumanBody;
