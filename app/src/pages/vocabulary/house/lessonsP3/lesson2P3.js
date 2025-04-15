import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsAnimals/l2.js";

const tituloLeccion = "Lección 2 P3: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-3";



function Leccion2AnimalsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2AnimalsP3;
