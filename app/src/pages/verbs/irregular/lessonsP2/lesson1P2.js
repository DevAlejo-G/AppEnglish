import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsIrregular/l1.js";

const tituloLeccion = "Lección 1 P2: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-1-p3";



function Leccion1P2VI() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1P2VI;
