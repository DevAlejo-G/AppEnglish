import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsIrregular/l3.js";

const tituloLeccion = "Lección 3: Verbo Irregular";
const linkSiguiente = "/verb-irregular/leccion-3-p2";



function Leccion3VI() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3VI;
