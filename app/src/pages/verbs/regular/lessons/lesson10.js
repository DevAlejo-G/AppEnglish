import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsRegular/l10.js";

const tituloLeccion = "Lección 10: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-10-p2";



function Leccion10VR() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion10VR;
