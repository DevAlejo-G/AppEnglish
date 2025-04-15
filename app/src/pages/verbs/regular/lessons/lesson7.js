import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsRegular/l7.js";

const tituloLeccion = "Lección 7: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-7-p2";



function Leccion7VR() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7VR;
