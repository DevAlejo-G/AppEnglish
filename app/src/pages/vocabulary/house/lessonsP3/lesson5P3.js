import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsAnimals/l5.js";

const tituloLeccion = "Lección 5 P3: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-6";



function Leccion5AnimalsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5AnimalsP3;
