import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsAnimals/l8.js";

const tituloLeccion = "Lección 8: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-8-p2";



function Leccion8Animals() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8Animals;
