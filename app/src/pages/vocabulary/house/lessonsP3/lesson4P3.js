import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsAnimals/l4.js";

const tituloLeccion = "Lección 4 P3: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-5";



function Leccion4AnimalsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4AnimalsP3;
