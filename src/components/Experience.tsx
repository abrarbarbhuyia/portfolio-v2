import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface CompanyExperienceProps {
  employmentPeriod: string;
  companyName: string;
  companyPicture: string;
  jobTitle: string;
  jobDescription: string[];
  skills: string[];
}

const CompanyExperience = ({
  employmentPeriod,
  companyName,
  companyPicture,
  jobTitle,
  jobDescription,
  skills,
}: CompanyExperienceProps) => {
  const [ref, inView] = useInView({
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
      <motion.div
        className="rounded-lg bg-white p-6 shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div className="flex flex-row">
          <div className="mr-4 self-center shadow-sm">
            <Image
              src={companyPicture}
              alt="Company Logo"
              width={248}
              height={248}
              className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">
              {companyName}
            </h2>
            <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
              {jobTitle}
            </div>
            <div className="text-sm text-gray-500 md:mt-0.5 md:text-base">
              {employmentPeriod}
            </div>
          </div>
        </div>
        <ul className="mt-4 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
          {jobDescription.map((point, index) => (
            <li key={index} className="ml-4">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
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
  );
};

const Experience = () => {
  const companyExperiences: CompanyExperienceProps[] = [
    {
      employmentPeriod: "November 2022 - Present",
      companyName: "Optus",
      companyPicture: "/images/optus.jpg",
      jobTitle: "Software Engineer Intern",
      jobDescription: [
        "Developed and maintained automation tools as containerized applications on a DevOps stack to improve scalability and ease management of the Core Network.",
        "Engineered APIs to automate the running of shell commands on Core Network Nodes to enable alerting and improve visibility of network health.",
        "Fixed a production Minio database to support a retention policy when faced with storage issues, resulting in over 600GB of space savings.",
        "Led the migration of an enterprise Gitlab instance through ArgoCD, resulting in enhanced system stability and simpler maintenance.",
        "Automated the truncation of system logging to reduce storage consumption on Kubernetes nodes by over 30% when faced with critical disk issues.",
        "Spearheaded the development of an automatic proxy tool to enable remote engineers efficient access to lab elements that were previously unreachable, resulting in increased productivity.",
      ],
      skills: ["React", "JavaScript", "Rancher", "YAML", "Python", "Jira", "Confluence", "Ansible Playbooks", "APIs"],
    },
    {
      employmentPeriod: "July 2021 - December 2021",
      companyName: "Gecko.rent",
      companyPicture: "/images/gecko.jpeg",
      jobTitle: "Software Engineer Intern",
      jobDescription: [
        "Worked to actively solve bugs and build new features for a high-growth rental marketplace within a React-based framework.",
        "Architected back-end GraphQL queries to enable the development of new features in the front-end.",
        "Integrated responsive user interfaces that boosted mobile traffic while liaising closely with the design team.",
        "Redesigned the order confirmation page and assisted in the implementation of the sending of confirmation emails to increase customer trust.",
      ],
      skills: ["JavaScript", "React", "GraphQL", "Docker", "Trello"],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12 shadow-lg">
        {companyExperiences.map((companyExperience, index) => (
          <CompanyExperience key={index} {...companyExperience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
