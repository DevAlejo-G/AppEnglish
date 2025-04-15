import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsRegular/l8.js";

const tituloLeccion = "Lección 8 P3: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-9";



function Leccion8P3VR() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8P3VR;
