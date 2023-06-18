/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext();
export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    function handleLocalStorageTheme() {
      let theme = localStorage.getItem("rk26-theme");
      if (theme !== null) {
        theme = theme === "true" ? true : false;
        setIsDark(theme);
      } else {
        localStorage.setItem("rk26-theme", isDark);
      }
    }
    handleLocalStorageTheme();
  }, []);

  function toggleTheme() {
    setIsDark((prev) => !prev);

    localStorage.removeItem("rk26-theme");
    localStorage.setItem("rk26-theme", !isDark);
  }
  return (
    <ThemeContext.Provider
      value={{ darkTheme: isDark, toggleTheme: toggleTheme }}
    >
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
