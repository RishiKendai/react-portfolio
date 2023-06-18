import React, { useContext } from "react";
import projects from "../styles/projects.module.css";
import { ThemeContext } from "../App";

// import other react components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
// import images
import tictactoe from "../assets/TicTacToe.png";
import chatapp from "../assets/chatapp.png";
import quizapp from "../assets/quiz.png";

export default function Projects() {
  const theme = useContext(ThemeContext);

  return (
    <section
      theme={theme.darkTheme ? "" : "light"}
      className={`px-2 py-4 flex flex-col ${projects.projectSection}`}
    >
      <Navbar current="projects" />
      <div className={`flex-1 mb-3 flex justify-center`}>
        <div className={`mt-9 items-center flex flex-col ${projects.inner}`}>
          <div className={`item-center mb-5 md:w-3/4 ${projects.header}`}>
            {/* <h3
              className={`text-center text-3xl md:text-5xl mb-2 font-rancho text-secondary tracking-wide font-medium`}
            >
              Showcase
            </h3> */}
            <p
              className={`w-full text-center self-center md:text-xl  font-default `}
            >
              When you want to tell your skills to others you dont want to argue
              with them about your skills you can just show case your skills.
            </p>
          </div>
          <div className={`${projects.main}`}>
            <ProjectCard
              img={tictactoe}
              alt="tictactoe"
              title="Tic Tac Toe"
              description="A classic game loved by everyone around world, enjoyed myself while developing the game."
            />
            <ProjectCard
              img={quizapp}
              alt="quizapp"
              title="Quiz"
              description="Making a quiz game is one the default for all beginners who start their journey in web. Even I was no exceptional, I have created simple responsive quiz app."
            />
            <ProjectCard
              img={chatapp}
              alt="chatapp"
              title="Chat app"
              description="A simple chat application where we can chat with our friends in real time with less latency and change your dp and use stickers and even more."
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
