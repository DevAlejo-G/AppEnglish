import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsAnimals/l1.js";

const tituloLeccion = "Lección 1 P2: Animals";
const linkSiguiente = "/vocabulary/animals/leccion-1-p3";



function Leccion1AnimalsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1AnimalsP2;