import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header"
import Experience from "../components/Experience"
import ExperienceTitle from "~/components/ExperienceTitle";

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
        </div>
      </main>
    </>
  );
};

export default Home;
