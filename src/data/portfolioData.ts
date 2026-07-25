import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  developer: {
    name: "Jakka Harika Devi",
    title: "Data Engineering & Cloud Solutions Specialist",
    tagline: "Building intelligent data pipelines, cloud architectures, and AI-driven solutions.",
    summary:
      "Computer Science undergraduate with a strong foundation in Python, SQL, database management, and data analysis. Currently building expertise in Data Science, Generative AI, and cloud-based data technologies with hands-on experience using Python, MySQL, Pandas, AWS, and Power BI. Quick learner with strong analytical, problem-solving, and communication skills, eager to contribute to data engineering and IT solutions in a collaborative environment.",
    objective:
      "To leverage technical capabilities in Python, SQL, Cloud Architecture (AWS), and Generative AI to engineer scalable data infrastructures, build interactive analytics platforms, and drive data-informed decision-making for top technology teams.",
    resumeUrl: "/resume.pdf",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    socials: {
      github: "https://github.com/harikajakka",
      linkedin: "https://www.linkedin.com/in/harika-rayudu-jakka-80b233342",
      twitter: "https://x.com/harikajakka",
      email: "harikaravudujakka@gmail.com",
      phone: "+91 7674008667",
      location: "Kakinada, Andhra Pradesh, India",
      leetcode: "https://leetcode.com/u/harikajakka/",
      hackerrank: "https://www.hackerrank.com/profile/harikajakka",
    },
  },
  stats: [
    { label: "Graduation CGPA", value: 8.3, suffix: "/10" },
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Cloud Services Mastered", value: 6, suffix: "+" },
    { label: "Certifications Earned", value: 4, suffix: "" },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ],
  skills: [
    // Data Science & AI
    { name: "Python", level: 90, category: "Data Science & AI", iconName: "Code2", description: "Scripting, Pandas, NumPy, Data Cleaning & ML basics" },
    { name: "Generative AI", level: 85, category: "Data Science & AI", iconName: "Sparkles", description: "Prompt Engineering, LLMs, Microsoft DigiSaksham Gen AI" },
    { name: "Pandas & Data Analysis", level: 88, category: "Data Science & AI", iconName: "BarChart3", description: "Exploratory Data Analysis, Data Wrangling & Processing" },

    // Databases & SQL
    { name: "MySQL & RDBMS", level: 92, category: "Databases", iconName: "Database", description: "Complex Queries, Indexing, Schema Design & Joins" },
    { name: "SQL", level: 95, category: "Databases", iconName: "Table", description: "Data Extraction, Aggregation, Subqueries & Window Functions" },

    // Tools & Platforms
    { name: "Power BI", level: 88, category: "Tools", iconName: "LayoutDashboard", description: "Interactive Dashboards, DAX, Data Visualization & KPI Reports" },
    { name: "VS Code", level: 95, category: "Tools", iconName: "Terminal", description: "Primary IDE, Extensions, Debugging & Git Integration" },
    { name: "Microsoft Excel", level: 90, category: "Tools", iconName: "FileSpreadsheet", description: "Pivot Tables, VLOOKUP/XLOOKUP, Data Modeling & Macros" },

    // Cloud & Infrastructure
    { name: "AWS EC2", level: 82, category: "Cloud", iconName: "Server", description: "Virtual Server Provisioning, Security Groups & Deployment" },
    { name: "AWS S3", level: 86, category: "Cloud", iconName: "HardDrive", description: "Object Storage Bucket Policies, Lifecycles & Static Assets" },
    { name: "AWS IAM", level: 80, category: "Cloud", iconName: "ShieldCheck", description: "Role-Based Access Control, Policies & Identity Management" },

    // Core CS Concepts
    { name: "Data Structures", level: 85, category: "Backend", iconName: "Cpu", description: "Arrays, Linked Lists, Trees, Stacks, Queues & Hash Maps" },
    { name: "Problem Solving", level: 90, category: "Backend", iconName: "BrainCircuit", description: "Algorithmic thinking and optimized logic execution" },
  ],
  projects: [
    {
      id: "sand-battery",
      title: "Sand Battery – Thermal Energy Storage (TES)",
      description: "A large-scale physics-based Thermal Energy Storage system leveraging sensible heat storage principles in insulated sand containers.",
      longDescription:
        "Designed and analyzed a high-capacity thermal energy storage solution. Unlike chemical batteries, a Sand Battery stores clean renewable energy as heat in sand containers. This project models energy absorption, thermal retention over extended cycles, and controlled heat discharge using Python thermodynamic simulations.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
      techStack: ["Python", "Thermodynamic Modeling", "Data Analysis", "Physics Simulation"],
      githubUrl: "https://github.com/harikajakka/sand-battery-tes",
      liveDemoUrl: "https://sand-battery-demo.vercel.app",
      category: "Data Science & AI",
      featured: true,
    },
    {
      id: "aws-cloud-sales-dashboard",
      title: "AWS & Power BI Executive Sales Pipeline",
      description: "End-to-end cloud data pipeline extracting MySQL transactional records into AWS S3 and serving real-time Power BI executive dashboards.",
      longDescription:
        "Engineered an automated data pipeline using Python scripts running on AWS EC2, storing raw JSON/CSV feeds into AWS S3 buckets, aggregating data with MySQL queries, and displaying key revenue metrics and forecasting visuals via Power BI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      techStack: ["AWS EC2", "AWS S3", "MySQL", "Power BI", "Python", "Pandas"],
      githubUrl: "https://github.com/harikajakka/aws-sales-analytics",
      liveDemoUrl: "https://powerbi-sales-demo.vercel.app",
      category: "Cloud & Web",
      featured: true,
    },
    {
      id: "genai-knowledge-assistant",
      title: "Smart GenAI Document Intelligence Bot",
      description: "Generative AI knowledge extraction tool that summarizes complex research documents using Microsoft GenAI frameworks and Python.",
      longDescription:
        "Built during the Microsoft DigiSaksham Gen AI certification initiative. Enables natural language semantic search across unstructured PDF files, extracting contextual answers, bullet points, and key takeaways with instant responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop",
      techStack: ["Python", "Generative AI", "Prompt Engineering", "NLP", "Streamlit"],
      githubUrl: "https://github.com/harikajakka/genai-doc-assistant",
      liveDemoUrl: "https://genai-doc-assistant.vercel.app",
      category: "Data Science & AI",
      featured: true,
    },
    {
      id: "relational-analytics-engine",
      title: "Automated Relational Database Analytics Suite",
      description: "High-performance MySQL database schema and analytical query generator for processing multidimensional enterprise datasets.",
      longDescription:
        "A relational database optimization tool featuring automated index generation, query performance benchmarking, subquery optimization, and automated CSV-to-MySQL data ingestion pipelines built with Python.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
      techStack: ["SQL", "MySQL", "Python", "Pandas", "Database Design"],
      githubUrl: "https://github.com/harikajakka/relational-analytics-suite",
      liveDemoUrl: "https://db-analytics-demo.vercel.app",
      category: "Database & Analytics",
      featured: false,
    },
  ],
  experience: [
    {
      id: "adhoc-network-intern",
      role: "AWS Cloud Computing Intern",
      company: "Adhoc Network",
      location: "Remote / India",
      duration: "2024",
      type: "Internship",
      responsibilities: [
        "Successfully completed intensive AWS Cloud Computing training by Adhoc Network, gaining deep practical expertise in cloud infrastructure.",
        "Architected scalable cloud environments utilizing Amazon EC2 instances, S3 object storage buckets, and Identity and Access Management (IAM) role policies.",
        "Configured secure VPC subnets, security groups, and automated backup strategies for cloud-hosted relational database workloads.",
        "Collaborated with peer engineers on cloud deployment strategies, optimizing resource allocation and cost management.",
      ],
      skillsUsed: ["Amazon Web Services (AWS)", "EC2", "S3", "IAM", "Cloud Architecture", "Deployment Strategies"],
    },
  ],
  education: [
    {
      id: "aditya-degree-college",
      degree: "Bachelor of Science (Computer Science)",
      institution: "Aditya Degree College",
      location: "Kakinada, Andhra Pradesh",
      duration: "2022 – 2025",
      score: "CGPA: 8.3 / 10",
      highlights: [
        "Specialized coursework in Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, and Python Programming.",
        "Active leader in technical workshops, coding clubs, and data science peer groups.",
        "Consistently maintained academic excellence with top percentile performance.",
      ],
    },
    {
      id: "sri-chaitanya",
      degree: "Intermediate (MPC – Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Girls Junior College",
      location: "Kakinada, Andhra Pradesh",
      duration: "2020 – 2022",
      score: "CGPA: 5.96 / 10",
      highlights: [
        "Focused on Analytical Mathematics, Physics principles, and problem-solving methodologies.",
        "Participated in science fairs and analytical problem-solving competitions.",
      ],
    },
    {
      id: "apsp-high-school",
      degree: "Secondary School Certificate (SSC)",
      institution: "3rd BN APSP EM High School",
      location: "Kakinada, Andhra Pradesh",
      duration: "2019 – 2020",
      score: "CGPA: 9.3 / 10",
      highlights: [
        "Achieved outstanding Distinction score of 9.3 CGPA.",
        "Demonstrated leadership as student delegate and academic excellence awardee.",
      ],
    },
  ],
  certifications: [
    {
      id: "microsoft-genai",
      title: "Essentials of Gen AI Certification Course",
      issuer: "Microsoft & DigiSaksham",
      date: "2024",
      skillsCovered: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"],
      icon: "Sparkles",
    },
    {
      id: "aws-cloud-cert",
      title: "AWS Cloud Computing Certification",
      issuer: "Adhoc Network",
      date: "2024",
      skillsCovered: ["AWS EC2", "AWS S3", "AWS IAM", "Cloud Infrastructure"],
      icon: "Cloud",
    },
    {
      id: "niit-communication",
      title: "Professional Edge Course in Communication",
      issuer: "NIIT Foundation",
      date: "2023",
      skillsCovered: ["Professional Communication", "Team Leadership", "Presentation"],
      icon: "MessageSquare",
    },
    {
      id: "pearson-mepro",
      title: "English Proficiency Certification",
      issuer: "MePro Pearson",
      date: "2023",
      skillsCovered: ["Business English", "Technical Writing", "Interpersonal Skills"],
      icon: "Award",
    },
  ],
  achievements: [
    {
      id: "academic-distinction",
      title: "SSC Academic Excellence Award",
      category: "Award",
      date: "2020",
      description: "Awarded top honor for securing 9.3 CGPA in Secondary School Examinations.",
      metric: "9.3 CGPA",
    },
    {
      id: "aws-cloud-completion",
      title: "Cloud Architecture Excellence",
      category: "Certifications",
      date: "2024",
      description: "Successfully built and deployed cloud infrastructure projects during Adhoc Network AWS program.",
      metric: "100% Score",
    },
    {
      id: "languages-spoken",
      title: "Trilingual Multilingual Fluency",
      category: "Coding Profile",
      date: "Ongoing",
      description: "Fluent in English, Telugu, and Hindi for global team collaboration and technical documentation.",
      metric: "3 Languages",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Dr. K. Srinivas",
      role: "Department Head of Computer Science",
      organization: "Aditya Degree College",
      content:
        "Jakka Harika Devi stands out for her analytical rigor and self-driven commitment. Her work on SQL database schemas and data analysis projects shows a level of polish expected from seasoned industry professionals.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "t2",
      name: "Ramesh Varma",
      role: "Senior Cloud Architect & Instructor",
      organization: "Adhoc Network",
      content:
        "During her AWS internship, Harika demonstrated exceptional speed in grasping cloud security, S3 bucket management, and IAM policies. She is reliable, proactive, and technically sound.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ],
};
