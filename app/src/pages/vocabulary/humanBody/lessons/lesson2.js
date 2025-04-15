import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsHumanBody/l2.js";

const tituloLeccion = "Tronco: Human Body";
const linkSiguiente = "/vocabulary/humanBody/leccion-2-p2";



function Leccion2HumanBody() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2HumanBody;
