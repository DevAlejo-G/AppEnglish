import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsAnimals/l2.js";

const tituloLeccion = "Lección 2 P2: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-2-p3";



function Leccion2AnimalsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2AnimalsP2;
