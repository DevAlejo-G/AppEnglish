import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsAnimals/l3.js";

const tituloLeccion = "Lección 3: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-3-p2";



function Leccion3Animals() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3Animals;
