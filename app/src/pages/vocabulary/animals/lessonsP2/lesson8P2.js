import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsAnimals/l8.js";

const tituloLeccion = "Lección 8 P2: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-8-p3";



function Leccion8AnimalsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8AnimalsP2;
