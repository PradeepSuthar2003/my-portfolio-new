import React from "react";
import Header from "../Header/Header";
import ProjectCard from "../Card/ProjectCard";
import Timeline from "../Timeline/Timeline";
import Contact from "../Contact/Contact";
import Intro from "./Intro";

const HomePage = () => {
  return (
    <div className="pl-8 pr-8 md:pl-20 md:pr-20">
      <Header />
      <div className="flex justify-between items-center mt-20" id="home">
        <Intro />
      </div>

      <div className="mt-10" id="about">
        <h1 className="text-2xl pt-2 pb-2 text-blue-200">About me</h1>
        <span>
          React.js/Next.js Developer with 1.5+ year of experience delivering
          high-quality web applications. Skilled in JavaScript, TypeScript, and
          MySQL, with expertise in building responsive websites and ensuring
          smooth front end and back-end integration.
        </span>
      </div>

      <div id="projects">
        <ProjectCard
          title="Personal Projects"
          images={["/images/sales_m_1.png", "/images/sales_m_2.png"]}
          name="Garage Sales Management"
          description={[
            `Built a full-stack sales management system with Next.js (frontend)
              and Java Spring Boot (backend).`,
            `Created custom React components (tables, modals, toast
              notifications) to enhance user interactions.`,
            `Implemented dynamic reporting and data visualization features for
              efficient sales tracking.`,
            `Integrated NextAuth for authentication and managed application
              state using Redux and React Hook Form.`,
          ]}
          techStack={[
            "/techImg/HTML5.svg",
            "/techImg/CSS3.svg",
            "/techImg/JavaScript.svg",
            "/techImg/Next.js.svg",
            "/techImg/MySQL.svg",
            "/techImg/Spring.svg",
          ]}
        />
      </div>

      <div id="experience">
        <Timeline
          title="Work Experience"
          timeline={[
            {
              title: "Trainee Software Developer | Acute Informatics",
              date: "October 2023 – Present",
              description: [
                "Website Development:  Developed responsive and interactive websites using",
                ["JavaScript", "React.js", "Next.js", "TypeScript", "MySQL"],
                "OAuth 2.0 Authentication Server:",
                [
                  "Designed and implemented a secure authentication server using Next.js and MySQL.",
                  "Integrated end-to-end encryption with public-private key cryptography for secure data transmission.",
                  "Enabled secure user login, access token management, and encrypted communication following industry best practices.",
                ],
                "Legacy Application Migration:",
                [
                  "Led the migration of an old NetBanking Admin Panel from PowerBuilder to React.js with TypeScript.",
                  "Delivered a modernized, high-performance, and user-friendly application with improved scalability and usability.",
                ],
              ],
            },
          ]}
        />
      </div>

      <Contact />
    </div>
  );
};

export default HomePage;
