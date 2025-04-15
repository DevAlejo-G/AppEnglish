import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsRegular/l4.js";

const tituloLeccion = "Lección 4 P2: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-4-p3";



function Leccion4P2VR() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4P2VR;
