import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abrar Barbhuyia</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center bg-neutral-200">
        <div className="mx-auto flex h-full w-full max-w-7xl justify-center px-4">
          <div className="flex flex-row  flex-wrap-reverse justify-center">
            <div className="flex max-w-md md:max-w-3xl flex-col justify-center pr-10">
              <div className="text-5xl font-light">Hello!👋</div>
              <div className="text-6xl font-bold">
                My name is <span className="text-yellow-500">Abrar</span>
              </div>
              <div className="mt-6 text-lg leading-8">
                I'm a Full-Stack Developer who aspires to create exceptional
                products.
              </div>
              <div className="mt-6 text-lg leading-8">
                With my studies at UTS in conjunction with my work experience of
                over a year, I have gained strong fundamentals in{" "}
                <span className="font-bold text-green-500">
                  Full-Stack Development
                </span>{" "}
                and{" "}
                <span className="font-bold text-blue-700">
                  Devops Engineering
                </span>{" "}
                and the mindset to deliver high-quality code and robust
                applications that go beyond expectations.
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-0 md:ml-8 md:mr-8">
              <div className="overflow-hidden rounded-full border-4 border-yellow-300">
                <Image
                  src="/images/me.jpg"
                  alt="Abrar Barbhuyia"
                  width={440}
                  height={440}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
