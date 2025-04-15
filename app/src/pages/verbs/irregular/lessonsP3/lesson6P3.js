import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsIrregular/l6.js";

const tituloLeccion = "Lección 6 P3: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-7";



function Leccion6P3VI() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6P3VI;
