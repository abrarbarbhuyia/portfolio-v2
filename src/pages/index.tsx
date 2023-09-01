import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header"
import Experience from "../components/Experience"
import ExperienceTitle from "~/components/ExperienceTitle";
import AcademicExperienceTitle from "~/components/AcademicExperienceTitle";
import AcademicExperience from "~/components/AcademicExperience";
import SkillsTitle from "~/components/SkillsTitle";
import Skills from "~/components/Skills";
import LeadershipTitle from "~/components/LeadershipTitle";
import Leadership from "~/components/Leadership";
import TeamworkTitle from "~/components/TeamworkTitle";
import Teamwork from "~/components/Teamwork";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abrar Barbhuyia</title>
        <meta name="description" content="Abrar Barbhuyia's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen justify-center bg-metal">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white">
          <Header />
          <ExperienceTitle />
          <Experience />
          <AcademicExperienceTitle />
          <AcademicExperience />
          <LeadershipTitle />
          <Leadership />
          <TeamworkTitle />
          <Teamwork />
          <SkillsTitle />
          <Skills />
        </div>
      </main>
    </>
  );
};

export default Home;
