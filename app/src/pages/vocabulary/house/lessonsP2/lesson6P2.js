import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsAnimals/l6.js";

const tituloLeccion = "Lección 6 P2: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-6-p3";



function Leccion6AnimalsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion6AnimalsP2;
