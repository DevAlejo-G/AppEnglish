import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsRegular/l10.js";

const tituloLeccion = "Lección 10 P3: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-11"; //segundaPractica



function Leccion10P3VR() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion10P3VR;
