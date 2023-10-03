import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="mb-4 border-b-2 border-yellow-300 pb-2 text-2xl font-extrabold text-gray-900">
          How My Passion Developed
        </h1>
        <div className="mx-auto w-1/2">
          <Image
            src="https://i.pinimg.com/originals/32/98/ff/3298ff05e205e95592a9f39461301743.jpg"
            alt="Childhood Image"
            width={400}
            height={267}
            className="mx-auto rounded-lg"
          />
        </div>
        <p className="text-black">
          Ever since I was little, I was curious about the interaction between
          people and computers, and how everything we do on a computer is so
          intuitive and smooth to use. I enjoyed fiddling with different
          computer applications, and as a result, I was always using the
          computer that my parents had bought originally to do their work.
        </p>
        <p className="text-black">
          I found out about programming through playing video games, and then
          came across videos explaining the world of coding. This idea of
          creating new things from scratch through just a computer piqued my
          interest and stayed with me throughout High School, so I decided to
          pursue Software Engineering in university.
        </p>
        {/* New Section */}
        <div className="space-y-4">
          <h2 className="border-b-2 border-yellow-300 pb-2 text-2xl font-extrabold text-gray-900">
            Plans for the Future 💻
          </h2>
          <h5 className="m-0 text-gray-600">
            My Path to Become the Best Software Engineer I Can Be 👨🏽‍💻
          </h5>
          <p className="mt-1 text-black">
            Throughout my career, I want to work on the following areas:
          </p>
          <ul className="ml-6 list-disc">
            <li className="text-black">
              <li className="text-black">
                <strong>Growth:</strong> I want to be constantly learning new
                things and trying new approaches throughout my university and
                professional career. I believe having this{" "}
                <strong>personal commitment</strong> will allow me to provide
                great value to each organization I work with.
              </li>
              <strong>Technical Skills:</strong> I want to expand on my
              technical skills so that I can gain{" "}
              <strong>advanced engineering knowledge</strong>. By gaining this
              knowledge, I intend on creating highly efficient and impactful
              Software Engineering solutions.
            </li>
            <li className="text-black">
              <strong>Creating Safe and Sustainable Solutions:</strong> Through
              creating safe and sustainable solutions, I am able to effectively
              solve relevant problems with highly effective solutions that have
              safety and sustainability in mind. By exploring more projects, I
              will be able to develop and master this skill.
            </li>
          </ul>
        </div>
        {/* End of New Section */}

        {/* Future Study Section */}
        <div className="space-y-4">
          <h2 className="border-b-2 pb-2 text-xl font-extrabold text-gray-900">
            Future Study 📚
          </h2>
          <p className="text-black">
            After my studies, I intend on completing a{" "}
            <strong>Master of Computer Science</strong>, so that I can have a
            deeper understanding of the world of Software Engineering. With the
            knowledge I gain from my master&apos;s degree, I intend on taking a
            technical lead position at a future company.
          </p>
        </div>
        {/* End of Future Study Section */}
      </div>
    </div>
  );
};

export default About;
