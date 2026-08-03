export interface WorkExperience {
  year: string;
  employer: string;
  logo?: string;
  title: string;
  datestart: string;
  dateend: string;
  achievements: string[];
}

export interface OpenSourceExperience {
  year: string;
  project: string;
  url: string;
  achievements: string[];
}

export const workExperience: WorkExperience[] = [
  {
    year: "2023",
    employer: "Humber Polytechnic",
    logo: "/img/experience/humber-college-logo.jpeg",
    title: "Web Developer & Multimedia Specialist",
    datestart: "2023 April",
    dateend: "2026 June",
    achievements: [
      "Led the full software lifecycle of enterprise web applications serving 86,000+ users.",
      "Delivered custom full-stack solutions using PHP, JavaScript, SQL, Twig, and Drupal.",
      "Managed AWS-hosted production environments, ensuring secure, accessible (AODA/WCAG), and reliable applications through deployments, upgrades, and ongoing maintenance.",
    ],
  },
  {
    year: "2017",
    employer: "New Era Technology",
    logo: "/img/experience/new-era-logo.jpeg",
    title: "Customer Support Center Advocate",
    datestart: "2017 April",
    dateend: "2022 October",
    achievements: [
      "Developed a Python automation tool that reduced manual work by generating standardized support responses for Level 1 & 2 service desk staff.",
      "Diagnosed and resolved network, endpoint, and enterprise communications issues.",
    ],
  },
  {
    year: "2013",
    employer: "Multimatic",
    logo: "/img/experience/multimatic-logo.jpeg",
    title: "Manufacturing Tech / IT (Co-op)",
    datestart: "2013 May",
    dateend: "2013 August",
    achievements: [
      "Architected ETL process between MS Access and MySQL to modernize tracking of manufacturing failure data.",
      "Linked Kepware to MySQL to track errors, states, and part counts in various automated manufacturing systems.",
    ],
  },
  {
    year: "2012",
    employer: "Humber Polytechnic",
    logo: "/img/experience/humber-college-logo.jpeg",
    title: "Client Services Agent",
    datestart: "2012 September",
    dateend: "2014 May",
    achievements: [
      "Resolved identity, network, and device support issues for staff and domestic and international students.",
    ],
  },
];

export const openSourceExperience: OpenSourceExperience[] = [
  {
    year: "2023",
    project: "Palettey",
    url: "https://github.com/bartbergmans/Palettey",
    achievements: [
      "Submitted and merged a pull request resolving a bug affecting generated color palette output.",
      "Expanded Jest test coverage to capture edge cases and critical bugs.",
      "Collaborated through GitHub pull request workflow including code review and contribution process.",
    ],
  },
];
