import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsIrregular/l2.js";

const tituloLeccion = "Lección 2 P2: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-2-p3";



function Leccion2P2VI() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2P2VI;
