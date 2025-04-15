import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsRegular/l8.js";

const tituloLeccion = "Lección 8: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-8-p2";



function Leccion8VR() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8VR;
