import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsIrregular/l3.js";

const tituloLeccion = "Lección 3 P3: Verbo Irregular";
const linkSiguiente = "/verb-regular/leccion-4";



function Leccion3P3VI() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3P3VI;
