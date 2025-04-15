import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1HumanBody from "pages/vocabulary/humanBody/lessons/lesson1";
import Leccion2HumanBody from "pages/vocabulary/humanBody/lessons/lesson2";
import Leccion3HumanBody from "pages/vocabulary/humanBody/lessons/lesson3";
import Leccion4HumanBody from "pages/vocabulary/humanBody/lessons/lesson4";
import Leccion5HumanBody from "pages/vocabulary/humanBody/lessons/lesson5";

import Leccion1HumanBodyP2 from "pages/vocabulary/humanBody/lessonsP2/lesson1P2";
import Leccion2HumanBodyP2 from "pages/vocabulary/humanBody/lessonsP2/lesson2P2";
import Leccion3HumanBodyP2 from "pages/vocabulary/humanBody/lessonsP2/lesson3P2";
import Leccion4HumanBodyP2 from "pages/vocabulary/humanBody/lessonsP2/lesson4P2";
import Leccion5HumanBodyP2 from "pages/vocabulary/humanBody/lessonsP2/lesson5P2";

import Leccion1HumanBodyP3 from "pages/vocabulary/humanBody/lessonsP3/lesson1P3";
import Leccion2HumanBodyP3 from "pages/vocabulary/humanBody/lessonsP3/lesson2P3";
import Leccion3HumanBodyP3 from "pages/vocabulary/humanBody/lessonsP3/lesson3P3";
import Leccion4HumanBodyP3 from "pages/vocabulary/humanBody/lessonsP3/lesson4P3";
import Leccion5HumanBodyP3 from "pages/vocabulary/humanBody/lessonsP3/lesson5P3";

import PracticeHumanBody from "pages/vocabulary/humanBody/practice";

import NotFound from "pages/home/notFound";

const HumanBodyRoutes = () => {
  return (
    <Routes>
        <Route path="leccion-1" element={<Leccion1HumanBody />} />
        <Route path="leccion-2" element={<Leccion2HumanBody />} />
        <Route path="leccion-3" element={<Leccion3HumanBody />} />
        <Route path="leccion-4" element={<Leccion4HumanBody />} />
        <Route path="leccion-5" element={<Leccion5HumanBody />} />

        <Route path="leccion-1-p2" element={<Leccion1HumanBodyP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2HumanBodyP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3HumanBodyP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4HumanBodyP2 />} />
        <Route path="leccion-5-p2" element={<Leccion5HumanBodyP2 />} />

        <Route path="leccion-1-p3" element={<Leccion1HumanBodyP3 />} />
        <Route path="leccion-2-p3" element={<Leccion2HumanBodyP3 />} />
        <Route path="leccion-3-p3" element={<Leccion3HumanBodyP3 />} />
        <Route path="leccion-4-p3" element={<Leccion4HumanBodyP3 />} />
        <Route path="leccion-5-p3" element={<Leccion5HumanBodyP3 />} />

        <Route path="leccion-practica" element={<PracticeHumanBody />} />

        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default HumanBodyRoutes;