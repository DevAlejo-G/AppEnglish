import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsIrregular/l3.js";

const tituloLeccion = "Lección 3 P2: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-3-p3";



function Leccion3P2VI() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3P2VI;
