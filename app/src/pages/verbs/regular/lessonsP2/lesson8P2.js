import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsRegular/l8.js";

const tituloLeccion = "Lección 8 P2: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-8-p3";



function Leccion8P2VR() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8P2VR;
