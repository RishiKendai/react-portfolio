import React, { useContext } from "react";
import { ThemeContext } from "../App";
// Import styles
import HomeCSS from "../styles/home.module.css";

// Import Other React Compoenents
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import images
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import portfolio_home from "../assets/profile_home.png";

export default function Home() {
  const theme = useContext(ThemeContext);
  return (
    <section
      theme={theme.darkTheme ? "" : "light"}
      className={`px-2 py-4 flex flex-col ${HomeCSS.homeSection}`}
    >
      <Navbar current="home" />
      <div className={HomeCSS.homeWrapper}>
        <div className={`self-center my-4 ${HomeCSS.names}`}>
          <div className={`font-poppins text-3xl md:text-4xl mb-3`}>
            Hey there,
          </div>
          <div className="font-poppins text-3xl md:text-4xl mb-1">
            I'm
            <span className="font-norican ml-3 text-4xl md:text-5xl whitespace-nowrap ">
              Rishikesh K M
            </span>
          </div>
          <div className="font-rancho text-xl md:text-2xl">
            Web Developer | Programmer
          </div>
        </div>
        <div className={`self-center mb-6 ${HomeCSS.illustratorHome}`}>
          <img src={portfolio_home} alt="portfolio_home" />
        </div>
        <div className={HomeCSS.resumeWrap}>
          <button className={HomeCSS.resume}>Resume</button>
        </div>
        <div
          className={`${HomeCSS.socialIconsDiv} flex items-center justify-center gap-4`}
        >
          <a
            href="https://www.instagram.com/i_rishi.kesh/"
            target="_blank"
            rel="noreferrer"
            className="h-7 w-8"
          >
            <img
              className="h-full w-full object-cover"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RishiKendai"
            className="h-10 w-8"
          >
            <img
              className="h-full w-full object-cover"
              src={github}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rishikesh-k-m-a459b2196"
            target="_blank"
            rel="noreferrer"
            className="h-12 w-8"
          >
            <img
              className="h-full w-full object-cover"
              src={linkedIn}
              alt="linkedIn"
            />
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}
