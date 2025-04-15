import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsRegular/l10.js";

const tituloLeccion = "Lección 10 P2: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-10-p3";



function Leccion10P2VR() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion10P2VR;
