interface JobListing {
  id: string;
  title: string;
  location: Location;
  company: Company;
  jobType: string;
  experienceLevel: string;
  educationRequired: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  salary: Salary;
  benefits: string[];
  applicationDeadline: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Company {
  name: string;
  industry: string;
  size: string;
}

interface Salary {
  min: number;
  max: number;
  currency: string;
}

export { JobListing, Location, Company, Salary };
