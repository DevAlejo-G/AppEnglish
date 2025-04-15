import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsColors/l1";

const tituloLeccion = "Lección 2 P2: Colors";
const linkSiguiente = "/vocabulary/colors/leccion-2-p3";



function Leccion2ColorsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2ColorsP2;
