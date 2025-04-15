import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsHumanBody/l5.js";

const tituloLeccion = "Órganos y Partes Internas: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-5-p2";



function Leccion5HumanBody() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5HumanBody;
