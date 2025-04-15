import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsIrregular/l4.js";

const tituloLeccion = "Lección 4: Verbo Irregular";
const linkSiguiente = "/verb-irregular/leccion-4-p2";



function Leccion4VI() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4VI;
