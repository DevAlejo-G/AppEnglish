import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsIrregular/l2.js";

const tituloLeccion = "Lección 2: Verbo Irregular";
const linkSiguiente = "/verb-irregular/leccion-2-p2";



function Leccion2VI() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2VI;
