// projects
export const projectsList = [
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/dslabs.jpg",
    has_vid: false,
    vid: "",
    company: "Cornell CS 5414",
    company_url: "https://www.cs.cornell.edu/courses/cs5414/2024fa/",
    title: "DSLabs Assignments",
    year: "Aug. 2024 – Dec. 2024",
    description:
      "a highly available, scalable, fault tolerant, and transactional key-value store",       
      has_partner1: true,
      partner1: {
        name: "Daniel Lee",
        url: "https://www.linkedin.com/in/daniel-lee-84a456218/",
      },
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "followed the sequence of DSLabs assignments created by Ellis Michael",
    contribution2:
      "developed using distributed computing concepts learned in class, such as Paxos and Two Phase Commit",
    contribution3: 
      "wrote design docs for each assignment and improved implementations based on TA feedback",
    tech_stack: "Java, DSLabs framework",
    has_github: true,
    github_url: "https://github.com/emichael/dslabs",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/klaviyo.jpg",
    has_vid: false,
    vid: "",
    company: "Klaviyo",
    company_url: "https://www.klaviyo.com/",
    title: "Multi-Tenant Webserver Test",
    year: "Jun. 2024 – Aug. 2024",
    description:
      "a system to allow developers at Klaviyo to concurrently test HTTP request logic in production environment",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "collaborated with SRE Web Infrastructure and Gateway team to architect and develop system ",
    contribution2:
      "implemented Infrastructure as Code using Terraform to provision AWS EC2 Auto Scaling Groups with security groups",
    contribution3: 
      "built dynamic routing mechanism on Nginx Reverse Proxy using Python, Jinja template, and Linux Cron Job",
    tech_stack: "Python, Terraform, Nginx, AWS",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/wikiautocategorization.jpg",
    has_vid: false,
    vid: "",
    title: "Wikipedia Auto Categorization",
    company: "Cornell CS 4701",
    company_url: "https://www.cs.cornell.edu/courses/cs4701/2024sp/",
    year: "Feb. 2024 – May. 2024",
    description:
      "an automated Wikipedia article tagging system for the Cornell CS 4701 practicum in artificial intelligence",
    has_partner1: true,
    partner1: {
      name: "Cathryn Li",
      url: "https://www.linkedin.com/in/cathryn-li-383239209/",
    },
    has_partner2: true,
    partner2: { 
      name: "Neil Estrada", 
      url: "https://www.linkedin.com/in/neil-estrada-2002/" 
    },
    has_partner3: false,
    contribution1:
      "processed and filtered data for Natural Language Processing techniques and Graph Neural Networks",
    contribution2:
      "generated model visualization using spring layout to scale edges and nodes",
    contribution3:
      "implemented using Python with PyTorch Geometric library",
    tech_stack: "Python, PyTorch Geometric",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/starburst.jpg",
    has_vid: false,
    vid: "",
    company: "Starburst",
    company_url: "https://www.starburst.io/",
    title: "Starburst Galaxy",
    year: "May. 2023 – Aug. 2023",
    description:
      "a fully-managed data lake analytics platform for querying across disparate data sources and with support for AWS, Azure, and Google Cloud",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "implemented pricing and packaging plan in Java, TypeScript with React, and SQL",
    contribution2:
      "integrated payment tiers into billing and entitlement system, added gates for paid tier features, and performed DB migrations",
    contribution3: 
      "developed new free trial experience by updating billing and entitlement managers and creating notifications events",
    tech_stack: "Java, React, TypeScript, SQL",
    has_github: false,
    github_url: "",
    has_demo: true,
    demo_url: "https://www.starburst.io/platform/starburst-galaxy/",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/queuemein.jpg",
    has_vid: false,
    vid: "",
    company: "Cornell DTI",
    company_url: "https://www.cornelldti.org/",
    title: "QueueMeIn",
    year: "Jan. 2023 – present",
    description:
      "a website used to manage and organize office hours in classes at Cornell",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "collaborated with a sub-team of 7 Cornell student developers, designers, and project managers",
    contribution2:
      "developed the filter questions by tags, preview most recent comment, and view current time spent on a question features",
    contribution3: "implemented using React with TypeScript",
    tech_stack: "React, TypeScript, SCSS",
    has_github: true,
    github_url: "https://github.com/cornell-dti/office-hours",
    has_demo: true,
    demo_url: "https://queueme.in/",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/melodygenerator.jpg",
    has_vid: true,
    has_sound: true,
    vid: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/melodygenerator.mp4",
    title: "Melody Generator",
    company: "Cornell CS 3110",
    company_url: "https://cs3110.github.io/textbook/chapters/intro/intro.html",
    year: "Sep. 2022 – Dec. 2022",
    description:
      "an interactive melody generator developed in OCaml for the Cornell CS 3110 class final project",
    has_partner1: true,
    partner1: {
      name: "Jennifer Gu",
      url: "https://www.linkedin.com/in/jjennifergu/",
    },
    has_partner2: true,
    partner2: { 
      name: "Tori Zhang", 
      url: "https://www.linkedin.com/in/victoria-zhang-b3b331229/" 
    },
    has_partner3: true,
    partner3: {
      name: "Benjamin Tang",
      url: "https://www.linkedin.com/in/b3njamint/",
    },
    contribution1:
      "implemented functions to create the randomly generated portion of the melody",
    contribution2:
      "created terminal UI including the outputted note sheet that contains the user’s generated melody",
    contribution3:
      "developed test suite to test all methods in interface",
    tech_stack: "OCaml",
    has_github: true,
    github_url: "https://github.com/b3njamint/cs-3110-final",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/finowl.png",
    has_vid: false,
    vid: "",
    title: "FinOwl",
    company: "MILL5",
    company_url: "https://www.mill5.com/",
    year: "May. 2022 - Aug. 2022",
    description:
      "an application that helps finance professionals retrieve quality market information through chat bots in platforms such as Microsoft Teams",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "developed internal administration site for managing FinOwl users and products in C# with .NET and TypeScript with React",
    contribution2:
      "built REST API with n-tier architecture and created unit and integration tests",
    contribution3:
      "implemented SPA using RTK Query from Redux Toolkit and Metronic Bootstrap template",
    tech_stack: "C#, .NET, React, TypeScript",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/designatcornell.jpg",
    has_vid: false,
    vid: "",
    company: "Cornell DTI",
    company_url: "https://www.cornelldti.org/",
    title: "CU Design",
    year: "Nov. 2021 – Dec. 2022",
    description:
      "a website that serves as a centralized repository of resources and information for the design community at Cornell",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "collaborated with a sub-team of 8 Cornell student developers, designers, and project managers",
    contribution2:
      "implemented the Student Orgs, Faculty, and Articles desktop pages and the Area of Study and Events mobile pages using React with TypeScript",
    contribution3: "prepared website for launch in May 2022!",
    tech_stack: "React, TypeScript, CSS",
    has_github: true,
    github_url: "https://github.com/cornell-dti/DesignAtCornell",
    has_demo: true,
    demo_url: "https://cudesign.io/",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/cornellbustracker.jpg",
    has_vid: true,
    has_sound: false,
    vid: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/cornellbustracker.mp4",
    title: "Raspberry Pi Cornell Bus Tracker",
    company: "Personal Project",
    company_url: "https://github.com/Sydney-tran",
    year: "Jul. 2022 – Aug. 2022",
    description:
      "a Cornell bus tracker that notifies students when to leave their dorm room to catch the bus from any stop just by looking at the LED lights in their room",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "performed web scraping of Tompkins Consolidated Area Transit website to collect route data",
    contribution2:
      "displayed real-time departure information through LED lights’ colors, patterns, and flashing",
    contribution3:
      "implemented project using Python, Raspberry Pi, and LED light strips",
    tech_stack: "Python",
    has_github: true,
    github_url:
      "https://github.com/Sydney-tran/raspberrypi_cornell_bus_tracker",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/critterworld.jpg",
    has_vid: false,
    vid: "",
    title: "Critter World",
    company: "Cornell CS 2112",
    company_url: "https://www.cs.cornell.edu/courses/cs2112/2021fa/",
    year: "Oct. 2021 – Dec. 2021",
    description:
      "a Java program that simulates evolving artificial life for the Cornell CS 2112 class final project",
    has_partner1: true,
    partner1: {
      name: "Cathryn Li",
      url: "https://www.linkedin.com/in/cathryn-li-383239209/",
    },
    has_partner2: true,
    partner2: { 
      name: "Tori Zhang", 
      url: "https://www.linkedin.com/in/victoria-zhang-b3b331229/" 
    },
    has_partner3: false,
    contribution1:
      "built a parser that generates abstract syntax trees and tested using fault injection",
    contribution2:
      "implemented Model-View-Controller design pattern to create an interpreter, simulator, and user interface",
    contribution3:
      'improved a critter\'s "smell" by implementing Dijkstra’s shortest path algorithm',
    tech_stack: "Java",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/sunsetcalc.png",
    has_vid: true,
    has_sound: false,
    vid: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/sunsetcalculator.mp4",
    title: "Sunset Calculator",
    company: "Personal Project",
    company_url: "https://github.com/Sydney-tran",
    year: "Feb. 2021 – Jun. 2021",
    description:
      "a website that calculates the quality of upcoming sunsets and sunrises in an inputted zip code",
    has_partner1: true,
    partner1: {
      name: "Emily Chen",
      url: "https://www.linkedin.com/in/emily-m-chen/",
    },
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "converted an inputted zip code into longitude and latitude using Google Maps API",
    contribution2:
      "collected and presented sunrise/sunset data based on location using Sunset API",
    contribution3: "implemented using JavaScript, HTML, and CSS",
    tech_stack: "JavaScript, HTML, CSS",
    has_github: true,
    github_url: "https://github.com/Sydney-tran/sunsetcalculator",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/cosine.jpg",
    has_vid: false,
    vid: "",
    title: "Cosine Demo",
    company: "Harvard DASlab",
    company_url: "http://daslab.seas.harvard.edu/",
    year: "May. 2020 – Sep. 2020",
    description:
      "a web demo for the Cosine (Cloud-Cost Optimized NoSQL Storage Engine) research paper",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "collaborated with professor Stratos Idreos and his team from the Data Systems Laboratory",
    contribution2:
      "implemented the UI and algorithms for uploading uniform or skewed data to the demo using JavaScript",
    contribution3:
      "debugged and resolved issues involving corner cases for designing the storage engine configurations",
    tech_stack: "JavaScript, HTML, CSS",
    has_github: true,
    github_url: "https://github.com/Sydney-tran/demosubmitter_cloud",
    has_demo: true,
    demo_url: "https://sydney-tran.github.io/demosubmitter_cloud/",
  },
];

// about images
export const imagesList = [
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/sydney.jpg",
    name: "me",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/family.jpg",
    name: "family",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/cornell.jpg",
    name: "cornell and friends",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/ski.jpg",
    name: "ski",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/mango.jpg",
    name: "mango",
  },
];

// about skills
export const skillsList = [
  {
    name: "Python",
  },
  {
    name: "Java",
  },
  {
    name: "C++",
  },
  {
    name: "SQL",
  },
  {
    name: "C#",
  },
  {
    name: "OCaml",
  },
  {
    name: "TypeScript",
  },
  {
    name: "HTML/CSS",
  },
  {
    name: "React",
  },
  {
    name: ".NET",
  },
  {
    name: "Linux",
  },
  {
    name: "Terraform",
  },
  {
    name: "Nginx",
  },
  {
    name: "Docker",
  },
  {
    name: "AWS",
  },
  {
    name: "Git",
  },
  {
    name: "VS Code",
  },
  {
    name: "IntelliJ",
  },
  {
    name: "Jira",
  },
  {
    name: "Agile",
  },
  {
    name: "Canary Testing",
  },
];

// about certifications
export const certificationsList = [
  {
    name: "Microsoft Azure Fundamentals",
    img: "https://images.credly.com/size/220x220/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
  },
];
