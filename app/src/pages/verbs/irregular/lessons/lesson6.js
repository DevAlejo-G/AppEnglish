import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsIrregular/l6.js";

const tituloLeccion = "Lección 6: Verbo Irregular";
const linkSiguiente = "/verb-irregular/leccion-6-p2";



function Leccion6VI() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6VI;
