interface CompanyExperienceProps {
  employmentPeriod: string,
  companyName: string,
  jobTitle: string,
  jobDescription: string,
  skills: string[]
}

const CompanyExperience = ({ employmentPeriod, companyName, jobTitle, jobDescription, skills }: CompanyExperienceProps) => {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-md lg:flex">
      <div className="flex flex-col justify-center p-6 lg:w-1/2">
        <div className="text-sm font-medium text-gray-500">
          <p>{employmentPeriod}</p>
          <p>{companyName}</p>
          <p>{jobTitle}</p>
        </div>
        <div className="mt-4 text-lg font-bold text-gray-900">
          <p>{jobDescription}</p>
        </div>
        <div className="mt-6 text-base text-gray-500">
          <p>Skills & Technologies:</p>
          <ul className="mt-4 list-disc pl-6">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const companyExperiences: CompanyExperienceProps[] = [
    {
      employmentPeriod: "January 2018 - Present",
      companyName: "Company 1",
      jobTitle: "Job Title",
      jobDescription: "Job Description",
      skills: ["Technology 1", "Technology 2", "Technology 3"],
    },
    {
      employmentPeriod: "January 2015 - December 2017",
      companyName: "Company 2",
      jobTitle: "Job Title",
      jobDescription: "Job Description",
      skills: ["Technology 1", "Technology 2", "Technology 3"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {companyExperiences.map((companyExperience, index) => (
          <CompanyExperience key={index} {...companyExperience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
