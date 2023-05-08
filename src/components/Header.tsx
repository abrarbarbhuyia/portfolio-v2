import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row flex-wrap-reverse justify-center w-full min-h-screen">
      <div className="justify-top flex max-w-3xl flex-col text-center md:justify-center md:pr-10 md:text-left">
        <div className="text-3xl font-light md:text-5xl">Hello!👋</div>
        <div className="text-4xl font-semibold md:text-6xl">
          My name is <span className="text-yellow-300">Abrar</span>
        </div>
        <div className="font-light">
          <div className="text-s mt-6 leading-8 md:text-lg">
            I&apos;m an aspiring Full-Stack Developer, studying at UTS who aspires to create exceptional
            products.
          </div>
          <div className="text-s mt-6 leading-8 md:text-lg">
            Through the process of my studies at UTS, in conjunction with my
            work experience of over a year, I have gained strong fundamentals in{" "}
            <span className="font-bold text-green-400">
              Full-Stack Development
            </span>{" "}
            and{" "}
            <span className="font-bold text-blue-400">Devops Engineering</span>{" "}
            and the mindset to deliver high-quality code and robust applications
            that exceed expectations.
          </div>
        </div>
      </div>
      <div className="md:ml -mb-5 flex flex-col items-center justify-center md:mb-0">
        <div className="max-h-full max-w-full overflow-hidden rounded-full border-4 border-yellow-300">
          <Image
            src="/images/me.jpg"
            alt="Abrar Barbhuyia"
            width={440}
            height={440}
            className="h-60 w-60 md:h-96 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
