import { z } from "zod";

export const calculatePremiumSchema = z.object({
  age: z.string(),
  employmentType: z.string(),
  salaryRange: z.string(),
  location: z.string(),
  industry: z.string(),
});

export const AGERANGES = [
  { key: 16, name: "16 - 25" },
  { key: 26, name: "26 - 35" },
  { key: 36, name: "36 - 45" },
  { key: 46, name: "46 - 55" },
  { key: 56, name: "56 - 65" },
];

const generateSalaryRanges = (ranges: number[][]) => {
  const min = ranges[0][0];
  const max = ranges[ranges.length - 1][1];
  
  return [
    { key: 'min', name: `< $${min.toLocaleString()}` },
    ...ranges.map((range, index) => ({
      key: index,
      name: `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`,
    })),
    { key: 'max', name: `$${max.toLocaleString()}+` }
  ];
};

export const SALARYRANGES = [
  {
    age: 16,
    salary: generateSalaryRanges([
      [25000, 39338],
      [39338, 61899],
      [61899, 97399],
      [97399, 153259],
      [153259, 241157],
    ]),
  },
  {
    age: 26,
    salary: generateSalaryRanges([
      [28000, 44059],
      [44059, 69327],
      [69327, 109087],
      [109087, 171651],
      [171651, 270096],
    ]),
  },
  {
    age: 36,
    salary: generateSalaryRanges([
      [31360, 49346],
      [49346, 77646],
      [77646, 122178],
      [122178, 192249],
      [192249, 302508],
    ]),
  },
  {
    age: 46,
    salary: generateSalaryRanges([
      [35123.2, 55267.04],
      [55267.04, 89963.75],
      [89963.75, 136839.14],
      [136839.14, 215319.04],
      [215319.04, 338808.68],
    ]),
  },
  {
    age: 56,
    salary: generateSalaryRanges([
      [31360, 49346],
      [49346, 77646],
      [77646, 122178],
      [122178, 192249],
      [192249, 302508],
    ]),
  },
];


export const EMPLOYMENTTYPE = [
  { key: "Full Time Permanent", name: "Full Time Permanent" },
  { key: "Part Time Permanent", name: "Part Time Permanent" },
  { key: "Full Time Temporary", name: "Full Time Temporary" },
  { key: "Part Time Temporary", name: "Part Time Temporary" },
  { key: "Contract", name: "Contract" },
  { key: "Freelance", name: "Freelance" },
  { key: "Commission-Based", name: "Commission-Based" },
  { key: "Internship/Apprenticeship", name: "Internship/Apprenticeship" },
  {
    key: "Entrepreneur / Business Owner",
    name: "Entrepreneur / Business Owner",
  },
  { key: "Other", name: "Other" },
];

export const PROVINCES = [
  { key: "AB", name: "Alberta" },
  { key: "BC", name: "British Columbia" },
  { key: "MB", name: "Manitoba" },
  { key: "NB", name: "New Brunswick" },
  { key: "NL", name: "Newfoundland & Labrador" },
  { key: "NT", name: "North West Territories" },
  { key: "NS", name: "Nova Scotia" },
  { key: "NU", name: "Nunavut" },
  { key: "ON", name: "Ontario" },
  { key: "PE", name: "Prince Edward Island" },
  { key: "QC", name: "Quebec" },
  { key: "SK", name: "Saskatchewan" },
  { key: "YT", name: "Yukon" },
];

export const INDUSTRIES = [
  { key: "Agriculture", name: "Agriculture" },
  { key: "Energy", name: "Energy" },
  { key: "Mining", name: "Mining" },
  { key: "Construction", name: "Construction" },
  {
    key: "Healthcare and Social Assistance",
    name: "Healthcare and Social Assistance",
  },
  { key: "Retail Trade", name: "Retail Trade" },
  { key: "Education", name: "Education" },
  { key: "Finance and Insurance", name: "Finance and Insurance" },
  { key: "Technology", name: "Technology" },
  { key: "Tourism and Hospitality", name: "Tourism and Hospitality" },
  { key: "Other", name: "Other" },
];
