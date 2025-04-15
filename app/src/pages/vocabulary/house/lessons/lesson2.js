import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsAnimals/l2.js";

const tituloLeccion = "Lección 2: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-2-p2";



function Leccion2Animals() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2Animals;
