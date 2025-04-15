import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsColors/l2";

const tituloLeccion = "Lección 2: Colors";
const linkSiguiente = "/vocabulary/colors/leccion-2-p2";



function Leccion2Colors() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2Colors;

