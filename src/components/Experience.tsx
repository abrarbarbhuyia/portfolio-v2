import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Experience = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12 shadow-lg">
        <motion.div
          className="rounded-lg bg-white p-6 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          ref={ref1}
        >
          <div className="flex flex-row">
            <div className="mr-4 self-center shadow-sm">
              <Image
                src="/images/optus.jpg"
                alt="Company Logo"
                width={248}
                height={248}
                className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                Optus
              </h2>
              <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
                Software Engineer Intern
              </div>
              <div className="text-sm text-gray-500 md:mt-0.5 md:text-base">
                November 2022 - Present
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-500 md:text-base">
            <p className="font-semibold">Experience Summary:</p>
            <p className="text-black">
              Designed and developed automation and the deployment of tools to
              assist the development experience of internal Software and Network
              Engineers at Optus.
            </p>
          </div>
          <div className="mt-4 text-sm text-green-500 md:text-base">
            <p className="font-semibold">Key Achievements:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li className="text-black">
                Fixed a production database to support a retention policy when
                faced with storage issues, resulting in over{" "}
                <strong>600GB of space savings.</strong> This reduced pressure
                on the team&apos;s limited budget and allowed for more data to
                be stored.
              </li>
              <li className="text-black">
                Assigned to the development and maintenance of automation tools
                to improve management of the Core Network. This{" "}
                <strong>
                  saved valuable hours spent on repetitive tasks by engineers
                </strong>
                , allowing focus on more important work.
              </li>
              <li className="text-black">
                <strong>Led</strong> the migration of an enterprise software
                instance into a simplified version-management Software. This{" "}
                <strong>streamlined the upgrade process</strong> executed by
                external contractors.
              </li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-sky-500 md:text-base">
            <p className="font-semibold">Learnings:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li className="text-black">
                Effective formal <strong>Communication</strong> with internal
                Network Engineers to understand their needs and provide updates
                on progress when faced with a high-priority bugfix.
              </li>
              <li className="text-black">
                Upskilled <strong>Creativity and Innovation</strong> through the
                innovative development of a tool that enables remote Network
                Engineers to access the Core Network.
              </li>
              <li className="text-black">
                Strengthened <strong>Problem Analysis</strong> by consistently
                identifying the root cause of networking issues and providing
                solutions that tend to the long-term needs of stakeholders.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap">
              {[
                "React",
                "JavaScript",
                "Rancher",
                "YAML",
                "Python",
                "Jira",
                "Confluence",
                "Ansible Playbooks",
                "APIs",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="mb-2 mr-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 md:text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-lg bg-white p-6 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          ref={ref2}
        >
          <div className="flex flex-row">
            <div className="mr-4 self-center shadow-sm">
              <Image
                src="/images/gecko.jpeg"
                alt="Company Logo"
                width={248}
                height={248}
                className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                Gecko.rent
              </h2>
              <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
                Software Engineer Intern
              </div>
              <div className="text-sm text-gray-500 md:mt-0.5 md:text-base">
                July 2021 - December 2021
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-500 md:text-base">
            <p className="font-semibold">Experience Summary:</p>
            <p className="text-black">
              Contributed to the development of a rental marketplace with a
              focus on front-end and back-end tasks.
            </p>
          </div>
          <div className="mt-4 text-sm text-green-500 md:text-base">
            <p className="font-semibold">Key Achievements:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li className="text-black">
                <strong>Spearheaded</strong> the upgrade of user interfaces to
                be supported on mobile devices. As a result, the number of
                mobile users on the platform increased by <strong>10%</strong>.
              </li>
              <li className="text-black">
                Resolved a number of bugs in the front and back-ends of the
                application, which allowed for smooth operation for customers
                and <strong>demonstrations to investors</strong>.
              </li>
              <li className="text-black">
                Redesigned the order confirmation page to support the sending of confirmation emails. This improved <strong>customer trust</strong> as they were able to receive confirmation of their order as soon as its made.
              </li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-sky-500 md:text-base">
            <p className="font-semibold">Learnings:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li className="text-black">
                <strong>Judgement</strong> skills by prioritisng tasks that were important for the survival of the startup. By fixing critical bugs before working on new features, I was able to ensure that the platform was stable for customers and demos.
              </li>
              <li className="text-black">
                Improved <strong>Evaluation</strong> skills by analysing the impact of new features during the development process. By doing this, I was able to prioritise features that would have the most impact on the startup during my time there.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap">
              {["JavaScript", "React", "GraphQL", "Docker", "Trello"].map(
                (skill, index) => (
                  <div
                    key={index}
                    className="mb-2 mr-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 md:text-sm"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
