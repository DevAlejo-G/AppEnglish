import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsRegular/l7.js";

const tituloLeccion = "Lección 7 P2: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-7-p3";



function Leccion7P2VR() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7P2VR;
