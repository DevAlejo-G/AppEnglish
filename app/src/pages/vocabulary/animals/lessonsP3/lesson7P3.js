import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsAnimals/l7.js";

const tituloLeccion = "Lección 7 P3: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-8";



function Leccion7AnimalsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7AnimalsP3;
