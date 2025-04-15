import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsIrregular/l5.js";

const tituloLeccion = "Lección 5 P3: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-6"; //primeraPractica



function Leccion5P3VI() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5P3VI;
