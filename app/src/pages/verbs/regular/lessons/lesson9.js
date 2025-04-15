import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsRegular/l9.js";

const tituloLeccion = "Lección 9: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-9-p2";



function Leccion9VR() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion9VR;
