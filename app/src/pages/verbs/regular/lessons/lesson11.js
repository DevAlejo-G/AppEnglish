import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsRegular/l11.js";

const tituloLeccion = "Lección 11: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-11-p2";



function Leccion11VR() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion11VR;
