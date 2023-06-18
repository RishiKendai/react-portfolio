import React, { useContext } from "react";

import { IoLocationOutline } from "react-icons/io5";
// Import other React Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutMeIllustration from "../assets/about_me.png";
import { ThemeContext } from "../App";
// Import styles
import aboutme from "../styles/aboutMe.module.css";
export default function AboutMe() {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={`px-2 py-4 flex flex-col ${aboutme.aboutMeSection}`}
      theme={theme.darkTheme ? "" : "light"}
    >
      <Navbar current="aboutMe" />
      <div className={` flex-1 justify-center items-center flex flex-col px-2 pt-3`}>
        <div className={aboutme.main}>
          <div className={`mb-3 ${aboutme.about}`}>
            <h3 className="text-3xl md:text-5xl mb-2 font-rancho text-secondary tracking-wide font-medium">
              About Me
            </h3>
            <p className="md:text-xl md:indent-9 font-default indent-7">
              I’m a Web developer living in TamilNadu, India. I’m currently
              doing my Masters in computer Application in Kumaraguru College of
              Technology (KCT) TamilNadu
              <IoLocationOutline className="inline-block ml-2 text-accent" />
            </p>
          </div>
          <div className={`self-center ${aboutme.illustrationAboutMe}`}>
            <img src={aboutMeIllustration} alt="about me" />
          </div>
          <div className={`mt-9 mb-6 font-norican ${aboutme.quotes}`}>
            <div className="w-11/12 md:text-2xl md:tracking-widest text-xl font-medium">
              Experience is the first and the best teacher you can ever get in
              your life
              <span className="block text-2xl ml-auto w-fit text-accent">
                {" "}
                -Rishikesh
              </span>
            </div>
          </div>
          <div className={`${aboutme.footer} md:text-xl indent-7 font-default mb-5`}>
            When you learn by yourself you will face alot of struggles and might
            get struck at some point, but trust me when you try to go little bit
            further you explore many things and you can master in it
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
