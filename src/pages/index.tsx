// index.tsx
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Experience from "../components/Experience";
import ExperienceTitle from "../components/ExperienceTitle";
import AcademicExperienceTitle from "../components/AcademicExperienceTitle";
import AcademicExperience from "../components/AcademicExperience";
import LeadershipTitle from "../components/LeadershipTitle";
import Leadership from "../components/Leadership";
import TeamworkTitle from "../components/TeamworkTitle";
import Teamwork from "../components/Teamwork";
import SkillsTitle from "../components/SkillsTitle";
import Skills from "../components/Skills";
import ResumeTitle from "~/components/ResumeTitle";
import Resume from "~/components/Resume";
import AboutTitle from "~/components/AboutTitle";
import About from "~/components/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abrar Barbhuyia</title>
        <meta name="description" content="Abrar Barbhuyia's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen justify-center bg-metal">
        <Sidebar />
        <div className="mx-auto flex h-full max-w-7xl flex-row-reverse sm:flex-col justify-center px-4 text-white">
          <Header />
          <AboutTitle/>
          <About />
          <SkillsTitle />
          <Skills />
          <ExperienceTitle />
          <Experience />
          <AcademicExperienceTitle />
          <AcademicExperience />
          <LeadershipTitle />
          <Leadership />
          <TeamworkTitle />
          <Teamwork />
          <ResumeTitle />
          <Resume />
        </div>
      </main>
    </>
  );
};

export default Home;
