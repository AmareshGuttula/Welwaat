export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: "Entry" | "Mid" | "Senior" | "Lead";
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export const departments = [
  "All Departments",
  "Engineering",
  "Design",
  "Marketing",
  "Operations",
  "Content",
];

export const locations = [
  "All Locations",
  "Remote",
  "Hyderabad, IN",
  "Bangalore, IN",
];

export const experienceLevels = [
  "All Levels",
  "Entry",
  "Mid",
  "Senior",
  "Lead",
];

export const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
];

export const jobListings: JobListing[] = [];
