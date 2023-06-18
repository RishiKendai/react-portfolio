import React, { useContext } from "react";

import { ThemeContext } from "../App";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LanguageCard from "../components/LanguageCard";
// icons
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
// css
import skills from "../styles/skills.module.css";
// images
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import java from "../assets/java.png";
import js from "../assets/JavaScript.png";
import python from "../assets/python.png";

// ! Main function
export default function Skills() {
  const theme = useContext(ThemeContext);
  return (
    <section
      theme={theme.darkTheme ? "" : "light"}
      className={`px-2 py-4 flex flex-col ${skills.skillsSection}`}
    >
      <Navbar current="skills" />
      <div className={`${skills.main}`}>
        <div className={`${skills.languages}`}>
          <div className={`${skills.languageWrapper}`}>
            <div className={`${skills.image}`}>
              <img src={java} alt="java" />
            </div>
            <div className={`${skills.progressBar}`}>
              <div data-width="82%" className={`${skills.progress}`}></div>
            </div>
          </div>

          <div className={`${skills.languageWrapper}`}>
            <div className={`${skills.image}`}>
              <img src={js} alt="JavaScript" />
            </div>
            <div className={`${skills.progressBar}`}>
              <div data-width="85%" className={`${skills.progress}`}></div>
            </div>
          </div>
          <div className={`${skills.languageWrapper}`}>
            <div className={`${skills.image}`}>
              <img src={python} alt="Python" />
            </div>
            <div className={`${skills.progressBar}`}>
              <div data-width="62%" className={`${skills.progress}`}></div>
            </div>
          </div>
          <div className={`${skills.languageWrapper}`}>
            <div className={`${skills.image}`}>
              <img src={c} alt="C" />
            </div>
            <div className={`${skills.progressBar}`}>
              <div data-width="76%" className={`${skills.progress}`}></div>
              {/* aff  */}
            </div>
          </div>
          <div className={`${skills.languageWrapper}`}>
            <div className={`${skills.image}`}>
              <img src={cpp} alt="C++" />
            </div>
            <div className={`${skills.progressBar}`}>
              <div data-width="43%" className={`${skills.progress}`}></div>
            </div>
          </div>
        </div>
        <div className={`${skills.technologies}`}></div>
      </div>
      <Footer />
    </section>
  );
}
