import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsAnimals/l1.js";

const tituloLeccion = "Lección 1: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-1-p2";



function Leccion1Animals() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1Animals;
