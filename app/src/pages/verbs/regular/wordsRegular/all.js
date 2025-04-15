import { preguntasIniciales as preguntasL1 } from "./l1.js";
import { preguntasIniciales as preguntasL2 } from "./l2.js";
import { preguntasIniciales as preguntasL3 } from "./l3.js";
import { preguntasIniciales as preguntasL4 } from "./l4.js";
import { preguntasIniciales as preguntasL5 } from "./l5.js";
import { preguntasIniciales as preguntasL6 } from "./l6.js";
import { preguntasIniciales as preguntasL7 } from "./l7.js";
import { preguntasIniciales as preguntasL8 } from "./l8.js";
import { preguntasIniciales as preguntasL9 } from "./l9.js";
import { preguntasIniciales as preguntasL10 } from "./l10.js";
import { preguntasIniciales as preguntasL11 } from "./l11.js";


const barajarArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const lecciones = [
  preguntasL1.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL2.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL3.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL4.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL5.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL6.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL7.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL8.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL9.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL10.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL11.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
];

lecciones.forEach(leccion => barajarArray(leccion));

export default lecciones;
