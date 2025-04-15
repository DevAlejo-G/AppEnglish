import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1VI from "pages/verbs/irregular/lessons/lesson1";
import Leccion2VI from "pages/verbs/irregular/lessons/lesson2";
import Leccion3VI from "pages/verbs/irregular/lessons/lesson3";
import Leccion4VI from "pages/verbs/irregular/lessons/lesson4";
import Leccion5VI from "pages/verbs/irregular/lessons/lesson5";
import Leccion6VI from "pages/verbs/irregular/lessons/lesson6";

import Leccion1P2VI from "pages/verbs/irregular/lessonsP2/lesson1P2";
import Leccion2P2VI from "pages/verbs/irregular/lessonsP2/lesson2P2";
import Leccion3P2VI from "pages/verbs/irregular/lessonsP2/lesson3P2";
import Leccion4P2VI from "pages/verbs/irregular/lessonsP2/lesson4P2";
import Leccion5P2VI from "pages/verbs/irregular/lessonsP2/lesson5P2";
import Leccion6P2VI from "pages/verbs/irregular/lessonsP2/lesson6P2";

import Leccion1P3VI from "pages/verbs/irregular/lessonsP3/lesson1P3";
import Leccion2P3VI from "pages/verbs/irregular/lessonsP3/lesson2P3";
import Leccion3P3VI from "pages/verbs/irregular/lessonsP3/lesson3P3";
import Leccion4P3VI from "pages/verbs/irregular/lessonsP3/lesson4P3";
import Leccion5P3VI from "pages/verbs/irregular/lessonsP3/lesson5P3";
import Leccion6P3VI from "pages/verbs/irregular/lessonsP3/lesson6P3";

import PracticeVerbIrregular from "pages/verbs/irregular/practice";

import NotFound from "pages/home/notFound";

const IrregularRoutes = () => {
  return (
    <Routes>
      <Route path="leccion-1" element={<Leccion1VI />} />
      <Route path="leccion-2" element={<Leccion2VI />} />
      <Route path="leccion-3" element={<Leccion3VI />} />
      <Route path="leccion-4" element={<Leccion4VI />} />
      <Route path="leccion-5" element={<Leccion5VI />} />
      <Route path="leccion-6" element={<Leccion6VI />} />

      <Route path="leccion-1-p2" element={<Leccion1P2VI />} />
      <Route path="leccion-2-p2" element={<Leccion2P2VI />} />
      <Route path="leccion-3-p2" element={<Leccion3P2VI />} />
      <Route path="leccion-4-p2" element={<Leccion4P2VI />} />
      <Route path="leccion-5-p2" element={<Leccion5P2VI />} />
      <Route path="leccion-6-p2" element={<Leccion6P2VI />} />

      <Route path="leccion-1-p3" element={<Leccion1P3VI />} />
      <Route path="leccion-2-p3" element={<Leccion2P3VI />} />
      <Route path="leccion-3-p3" element={<Leccion3P3VI />} />
      <Route path="leccion-4-p3" element={<Leccion4P3VI />} />
      <Route path="leccion-5-p3" element={<Leccion5P3VI />} />
      <Route path="leccion-6-p3" element={<Leccion6P3VI />} />

      <Route path="leccion-practica" element={<PracticeVerbIrregular />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default IrregularRoutes;
