import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsIrregular/l5.js";

const tituloLeccion = "Lección 5: Verbo Irregular";
const linkSiguiente = "/verb-irregular/leccion-5-p2";



function Leccion5VI() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5VI;
