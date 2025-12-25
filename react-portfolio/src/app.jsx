import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/about/Skills";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/experience/Projects";
import Education from "./sections/education/Education";
import Certification from "./sections/education/Certification";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certification />} />
      </Routes>
    </MainLayout>
  );
}
