import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsAnimals/l8.js";

const tituloLeccion = "Lección 8 P3: Animals";
const linkSiguiente = "/vocabulary/animals";



function Leccion8AnimalsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion8AnimalsP3;
