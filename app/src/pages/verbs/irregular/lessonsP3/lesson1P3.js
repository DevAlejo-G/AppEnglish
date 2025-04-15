import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsIrregular/l1.js";

const tituloLeccion = "Lección 1 P3: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-2";



function Leccion1P3VI() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1P3VI;
