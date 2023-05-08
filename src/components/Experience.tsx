interface CompanyExperienceProps {
  employmentPeriod: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  skills: string[];
}

const CompanyExperience = ({
  employmentPeriod,
  companyName,
  jobTitle,
  jobDescription,
  skills,
}: CompanyExperienceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="px-6 pt-8 md:py-8 md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900">{companyName}</h2>
          <div className="text-lg font-semibold text-gray-500">{jobTitle}</div>
          <div className="text-gray-500">{employmentPeriod}</div>
        </div>
      </div>
      <div className="px-6 pb-8">
        <div className="text-gray-900 text-sm md:text-lg">{jobDescription}</div>
        <div className="mt-4">
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const companyExperiences: CompanyExperienceProps[] = [
    {
      employmentPeriod: "November 2022 - Present",
      companyName: "Optus",
      jobTitle: "Software Engineering Intern",
      jobDescription: "My main responsibilities included Full Stack Development and DevOps Engineering, with the aim of creating automation tools that assist external teams in their day-to-day work. Some of things I am currently working on is managing, deploying and maintaining kubernetes clusters and applications, as well as creating CI/CD piplines for deployment and monitoring of applications and key network nodes all with a focus on scalability and reliability. I learned a lot about the importance of automation and how it can be used to improve the efficiency of teams.",
      skills: ["Kubernetes", "ArgoCD", "Rancher", "Gitlab CI/CD", "Harbor", "Ansible", "YAML", "Python", "Grafana", "Linux", "Jira", "Confluence"],
    },
    {
      employmentPeriod: "July 2021 - December 2021",
      companyName: "Gecko.rent",
      jobTitle: "Software Developer Intern",
      jobDescription: "The work in this internship focused on creating a rental marketplace in a react-based web application. I was responsible for creating new features, fixing bugs and working with a customer-centric mentality to ensure that the product was always improving. I learned a lot of the fundamentals of web development and how to work in a team environment.",
      skills: ["Javascript", "React", "GraphQL", "Docker", "Trello"],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {companyExperiences.map((companyExperience, index) => (
          <CompanyExperience key={index} {...companyExperience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
