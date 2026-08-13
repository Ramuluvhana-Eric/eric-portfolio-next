export const profile = {
  name: "Eric Mpho Ramuluvhana",
  role: "SIEM Engineer · SC-100 Cybersecurity Architect Expert",
  location: "Johannesburg, Gauteng, ZA — open to Cape Town",
  email: "ericmpho16@gmail.com",
  phone: "+27 64 648 8770",
  phoneDisplay: "+27 64 648 8770",
  linkedin: "https://linkedin.com/in/eric-mpho-ramuluvhana",
  linkedinLabel: "/in/eric-mpho-ramuluvhana",
};

export const heroChips = [
  "Microsoft Sentinel",
  "KQL",
  "Defender XDR",
  "Entra ID",
];

export const stats = [
  { num: "12", label: "Active certifications" },
  { num: "SC-100", label: "Expert level — architect" },
  { num: "4", label: "Oracle Cloud (OCI) certs" },
  { num: "SC-500", label: "Cloud & AI security — in progress" },
];

export const aboutParagraphs = [
  "I'm a SIEM engineer and SOC analyst working 24/7 rotational shifts at Rayton Corp, an MSSP in Johannesburg. My day-to-day is Microsoft Sentinel and KQL — building analytics rules, tuning out false positives, and correlating telemetry across endpoint, identity, and cloud to catch attack chains before they escalate.",
  "I hold 12 active certifications, including the SC-100 Cybersecurity Architect Expert — Microsoft's highest security credential — built up in under two years alongside full-time SOC work. I'm currently studying toward SC-500 (Cloud & AI Security Engineer Associate).",
  "Fluent in English, Venda, and Sepedi, with conversational isiZulu. Based in Johannesburg, open to Cape Town.",
];

export type SkillCategory = "detection" | "identity" | "cloud" | "tools";

export interface Skill {
  name: string;
  core?: boolean;
}

export const skillCategories: {
  key: SkillCategory;
  title: string;
  skills: Skill[];
}[] = [
  {
    key: "detection",
    title: "Detection & response",
    skills: [
      { name: "Microsoft Sentinel (SIEM/SOAR)", core: true },
      { name: "KQL — detection & hunting", core: true },
      { name: "Microsoft Defender XDR", core: true },
      { name: "Analytics rules & workbooks" },
      { name: "SOAR playbooks (Logic Apps)" },
      { name: "MITRE ATT&CK correlation" },
      { name: "IOC & TTP correlation" },
      { name: "Incident response & RCA" },
      { name: "Log ingestion & data connectors" },
      { name: "Multi-source log correlation" },
      { name: "Defender for Cloud Apps & O365" },
      { name: "Threat intelligence integration" },
    ],
  },
  {
    key: "identity",
    title: "Identity & access",
    skills: [
      { name: "Entra ID (Azure AD)", core: true },
      { name: "Conditional Access / MFA / PIM" },
      { name: "RBAC & Zero Trust design" },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & infrastructure",
    skills: [
      { name: "Azure Monitor & Log Analytics" },
      { name: "Azure Security Centre" },
      { name: "Microsoft Purview (DLP)" },
      { name: "Vulnerability management" },
      { name: "Hybrid cloud & on-prem security" },
      { name: "Windows & Linux environments" },
      { name: "Network security (TCP/IP, DNS, VPN)" },
      { name: "Security documentation & reporting" },
    ],
  },
  {
    key: "tools",
    title: "Security tools & platforms",
    skills: [
      { name: "FortiGate" },
      { name: "Tenable" },
      { name: "Nessus" },
      { name: "Qualys" },
      { name: "Splunk" },
      { name: "Rapid7" },
    ],
  },
];

export const skillFilters: { key: SkillCategory | "all" | "core"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "core", label: "Core only" },
  { key: "detection", label: "Detection & response" },
  { key: "identity", label: "Identity & access" },
  { key: "cloud", label: "Cloud & infrastructure" },
  { key: "tools", label: "Tools & platforms" },
];

export interface Incident {
  id: string;
  status: "ACTIVE" | "RESOLVED";
  period: string;
  role: string;
  org: string;
  bullets: string[];
}

export const timeline: Incident[] = [
  {
    id: "INC-002",
    status: "ACTIVE",
    period: "Jul 2025 — Present",
    role: "Cybersecurity Analyst — SOC",
    org: "Rayton Corp (MSSP) · Johannesburg, Gauteng · 24/7 rotational SOC shift",
    bullets: [
      "Build and tune Microsoft Sentinel analytics rules, workbooks, and KQL detections to cut false positives across a hybrid cloud environment.",
      "Maintain SIEM data connectors from Microsoft 365, Entra ID, Azure, and endpoint sources for full telemetry visibility.",
      "Develop SOAR playbooks that automate triage and enforce consistent containment across common attack scenarios.",
      "Investigate endpoint compromise, identity abuse, phishing, and lateral movement in Defender XDR — running root cause analysis and writing up remediation.",
      "Manage Entra ID posture: Conditional Access, PIM, MFA enforcement, RBAC.",
      "Correlate telemetry across endpoint, identity, network, and cloud to trace multi-stage attack chains against MITRE ATT&CK.",
    ],
  },
  {
    id: "INC-001",
    status: "RESOLVED",
    period: "Jul 2024 — Jun 2025",
    role: "Technical Support Technician — Work Integrated Learning",
    org: "Limpopo Dept. of Economic Development, Tourism & Environment (LEDET)",
    bullets: [
      "Supported Windows and Linux environments, Active Directory, and Microsoft 365 across a large government organisation.",
      "Managed user accounts and access provisioning in Active Directory — the foundation for the identity work I do now.",
      "Logged and tracked tickets through an ITSM platform, keeping SLA compliance and clean documentation.",
    ],
  },
];

export type ProjectCategory = "soc" | "cloud" | "it" | "academic";

export interface Project {
  icon: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  meta: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    icon: "🔍",
    category: "soc",
    categoryLabel: "SOC operations",
    title: "Security Incident Triage & Response System",
    meta: "Rayton Corp · 2025 – Present",
    description:
      "Operate as first line of defence in a 24/7 SOC, handling live security alerts across the organisation. Built personal triage playbooks and documentation templates to standardise investigation notes, reducing time-to-resolution and improving handover quality between shifts.",
    bullets: [
      "Triaged and resolved security alerts across SIEM and endpoint monitoring platforms daily",
      "Developed structured incident documentation templates adopted by the wider SOC team",
      "Identified recurring alert patterns and contributed to reducing false positive noise",
    ],
    tags: ["SIEM", "Incident Response", "Endpoint Monitoring", "Documentation"],
  },
  {
    icon: "🏢",
    category: "it",
    categoryLabel: "IT infrastructure",
    title: "Government Department M365 Environment Setup",
    meta: "LEDET · Limpopo · 2024 – 2025",
    description:
      "Led the setup, configuration, and ongoing support of Microsoft 365 environments for staff across multiple business units at a government department. Managed user provisioning, email configuration, SharePoint access, and Teams rollout for non-technical end users.",
    bullets: [
      "Configured M365 for multiple departments including Exchange, Teams, SharePoint, and OneDrive",
      "Trained and supported non-technical staff through the transition with minimal disruption",
      "Maintained accurate user access records contributing to audit readiness",
    ],
    tags: ["Microsoft 365", "Exchange", "SharePoint", "User Provisioning"],
  },
  {
    icon: "☁️",
    category: "cloud",
    categoryLabel: "Cloud security",
    title: "Microsoft Azure Security & Identity Lab",
    meta: "Self-directed · 2025",
    description:
      "Built and worked through a hands-on Azure lab environment to prepare for SC-200, SC-300, and AZ-500 certifications. Configured Azure Active Directory tenants, set up Conditional Access policies, deployed Microsoft Defender for Cloud, and simulated identity-based attack scenarios.",
    bullets: [
      "Configured Azure AD with MFA, Conditional Access, and Privileged Identity Management (PIM)",
      "Deployed and tuned Microsoft Sentinel for log ingestion and alert rule creation",
      "Successfully passed AZ-500, SC-300, and SC-200 certifications backed by this practical work",
    ],
    tags: ["Azure AD", "Sentinel", "Defender", "Conditional Access", "PIM"],
  },
  {
    icon: "🎓",
    category: "academic",
    categoryLabel: "Academic project",
    title: "Network Design & Security Implementation",
    meta: "Tshwane University of Technology · 2022 – 2024",
    description:
      "As part of the National Diploma in Computer Science, completed practical modules covering network architecture, information security principles, database design, and internet programming. Applied theoretical security concepts to practical assignments across the 23-subject programme.",
    bullets: [
      "Completed modules in Information Security, Computer Architecture, and Operating Systems",
      "Applied database principles and software engineering concepts in graded practical assignments",
      "Graduated with a 70.6% academic average across all 23 subjects",
    ],
    tags: ["Networking", "Information Security", "Databases", "Software Engineering"],
  },
  {
    icon: "🔶",
    category: "cloud",
    categoryLabel: "Cloud platform",
    title: "Oracle Cloud Infrastructure Study & Certification Drive",
    meta: "Self-directed · 2025",
    description:
      "Undertook a structured self-learning programme across Oracle Cloud Infrastructure, completing four OCI certifications in a single year alongside full-time employment. Covered cloud foundations, AI and machine learning services, data science workflows, and data platform architecture on OCI.",
    bullets: [
      "Earned four OCI certifications: Foundations, Generative AI, Data Science, and Data Platform",
      "Completed all four credentials within 2025 while working full-time in a 24/7 SOC",
      "Gained practical exposure to AI/ML pipelines, cloud compute, and data engineering on OCI",
    ],
    tags: ["OCI", "Generative AI", "Data Science", "Cloud Foundations"],
  },
  {
    icon: "🖥️",
    category: "it",
    categoryLabel: "IT support",
    title: "Multi-Department Helpdesk & Incident Queue Management",
    meta: "LEDET · Limpopo · 2024 – 2025",
    description:
      "Independently managed a concurrent helpdesk incident queue across multiple government business units, handling hardware failures, software issues, network connectivity problems, and user access requests. Developed a personal prioritisation system to maintain service levels under high-demand periods.",
    bullets: [
      "Resolved first-level incidents across hardware, software, network, and identity domains",
      "Built and maintained detailed records of issues and resolutions for knowledge base and audit use",
      "Guided non-technical users with step-by-step support, reducing repeat incidents over time",
    ],
    tags: ["Helpdesk", "ITSM", "Windows", "Network Troubleshooting"],
  },
];

export const projectFilters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "soc", label: "SOC" },
  { key: "cloud", label: "Cloud" },
  { key: "it", label: "IT" },
  { key: "academic", label: "Academic" },
];

export interface Certification {
  name: string;
  vendor: string;
  level: string;
  status: "Active" | "In progress";
  detail: string;
}

export const certifications: Certification[] = [
  {
    name: "Cybersecurity Architect Expert — SC-100",
    vendor: "Microsoft",
    level: "Expert",
    status: "Active",
    detail:
      "Validates the ability to design end-to-end Zero Trust security strategy across identity, network, data, apps, and infrastructure — Microsoft's top security credential.",
  },
  {
    name: "Azure Security Engineer Associate — AZ-500",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail:
      "Covers implementing security controls across identity, access, platform protection, data, applications, and hybrid infrastructure in Azure.",
  },
  {
    name: "Security Operations Analyst Associate — SC-200",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail:
      "Focused on threat detection, hunting, and response using Microsoft Sentinel, Defender XDR, and Defender for Cloud.",
  },
  {
    name: "Identity & Access Administrator Associate — SC-300",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail:
      "Covers designing, implementing, and operating identity and access management using Entra ID — authentication, authorisation, governance.",
  },
  {
    name: "Azure Administrator Associate — AZ-104",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail:
      "Covers managing Azure identities, governance, storage, compute, and virtual networks as a day-to-day Azure administrator.",
  },
  {
    name: "Azure Developer Associate — AZ-204",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail:
      "Covers developing, testing, and maintaining cloud applications and services on Azure, including security and storage integration.",
  },
  {
    name: "Azure AI Apps & Agents Developer Associate — AI-103",
    vendor: "Microsoft",
    level: "Associate",
    status: "Active",
    detail: "Covers building and orchestrating AI applications and agents on Azure AI platform services.",
  },
  {
    name: "Security, Compliance & Identity Fundamentals — SC-900",
    vendor: "Microsoft",
    level: "Fundamentals",
    status: "Active",
    detail:
      "Entry-level credential covering core concepts of security, compliance, and identity across Microsoft's platform.",
  },
  {
    name: "OCI 2025 Certified Generative AI Professional",
    vendor: "Oracle",
    level: "Professional",
    status: "Active",
    detail:
      "Covers building generative AI solutions on OCI, including large language model deployment and prompt engineering fundamentals.",
  },
  {
    name: "OCI 2025 Certified Data Science Professional",
    vendor: "Oracle",
    level: "Professional",
    status: "Active",
    detail:
      "Covers data science workflows on OCI — data preparation, model building, and deployment using OCI Data Science services.",
  },
  {
    name: "OCI 2025 Certified Foundations Associate",
    vendor: "Oracle",
    level: "Associate",
    status: "Active",
    detail: "Entry-level credential covering core OCI concepts — compute, storage, networking, and security fundamentals.",
  },
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    vendor: "Oracle",
    level: "Associate",
    status: "Active",
    detail: "Covers foundational data platform concepts on OCI — data lakes, data integration, and analytics services.",
  },
  {
    name: "Cloud & AI Security Engineer Associate — SC-500",
    vendor: "Microsoft",
    level: "Associate",
    status: "In progress",
    detail:
      "The successor to AZ-500 — expands into securing cloud and AI workloads across Entra ID, Key Vault, Defender for Cloud, Sentinel, and Security Copilot.",
  },
];

export interface EduEntry {
  year: string;
  name: string;
  org: string;
  detail?: string;
  modules?: string[];
}

export const education: EduEntry[] = [
  {
    year: "2024",
    name: "National Diploma in Computer Science",
    org: "Tshwane University of Technology (TUT) · Polokwane Campus",
    detail: "Academic average: 70.6% across 23 subjects.",
    modules: [
      "Information Security",
      "Operating Systems",
      "Computer Architecture & Organisation",
      "Database Principles",
      "Software Engineering",
      "Internet Programming",
      "Mobile Computing",
    ],
  },
  {
    year: "2020",
    name: "National Senior Certificate (Matric)",
    org: "Sinthumule Secondary School",
    detail: "Foundation for further academic and professional development in computing and technology.",
  },
];

export const navItems = [
  { id: "rules", label: "Skills" },
  { id: "timeline", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

