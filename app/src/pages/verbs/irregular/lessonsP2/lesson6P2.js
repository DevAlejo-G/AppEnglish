import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsIrregular/l6.js";

const tituloLeccion = "Lección 6 P2: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-6-p3";



function Leccion6P2VI() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6P2VI;
