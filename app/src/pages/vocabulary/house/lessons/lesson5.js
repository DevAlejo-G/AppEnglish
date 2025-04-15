import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsAnimals/l5.js";

const tituloLeccion = "Lección 5: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-5-p2";



function Leccion5Animals() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5Animals;
