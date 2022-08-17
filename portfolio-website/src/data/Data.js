// projects
export const projectsList = [
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/finowl.png", 
    has_vid: false,
    vid: "",
    title: "FinOwl",
    company: "MILL5",
    year: "May. 2022 - Aug. 2022",
    description: "an application that helps financiers and stock traders retrieve quality market information through chat bots in platforms such as Microsoft Teams",
    contribution1: "built frontend and backend of the internal administration site for managing FinOwl users and products",
    contribution2: "developed a REST API with .NET 6 using n-tier architecture with unit and integration tests",
    contribution3: "implemented SPA using React with TypeScript, RTK Query from Redux Toolkit, and a Metronic Bootstrap template",
    tech_stack: "C#, .NET, React, TypeScript",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/cornellbustracker.jpg", 
    has_vid: false, 
    vid: "",
    title: "Raspberry Pi Cornell Bus Tracker",
    company: "Personal Project",
    year: "Jul. 2022 – Aug. 2022",
    description: "a Cornell bus tracker that notifies students when to leave their dorm room to catch the bus from any stop just by looking at the LED lights in their room",
    contribution1: "performed web scraping of Tompkins Consolidated Area Transit website to collect route data",
    contribution2: "displayed real-time departure information through LED lights’ colors, patterns, and flashing",
    contribution3: "implemented project using Python, Raspberry Pi, and LED light strips",
    tech_stack: "Python",
    has_github: true,
    github_url: "https://github.com/Sydney-tran/raspberrypi_cornell_bus_tracker",
    has_demo: false,
    demo_url: "", 
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/designatcornell.jpg", 
    has_vid: false, 
    vid: "",
    company: "Cornell DTI",
    title: "Design@Cornell ",
    year: "Nov. 2021 – Present",
    description: "a website that serves as a centralized repository of resources and information for the design community at Cornell",
    contribution1: "collaborated with a sub-team of 8 Cornell student developers, designers, and project managers",
    contribution2: "implemented the student orgs, design community, articles, and faculty pages using React with TypeScript",
    contribution3: "prepared website for launch in May 2022!",
    tech_stack: "React, TypeScript, HTML, CSS",
    has_github: true,
    github_url: "https://github.com/cornell-dti/DesignAtCornell",
    has_demo: true,
    demo_url: "http://design.cornell.edu/",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/critterworld.jpg", 
    has_vid: false,
    vid: "",
    title: "Critter World",
    company: "Cornell CS 2112",
    year: "Oct. 2021 – Dec. 2021",
    description: "a Java program that simulates evolving artificial life for the Cornell CS 2112 class final project (created with Cathryn Li and Tori Zhang)",
    contribution1: "built a parser that generates abstract syntax trees and tested using fault injection",
    contribution2: "implemented Model-View-Controller design pattern to create an interpreter, simulator, and user interface",
    contribution3: "improved a critter's \"smell\" by implementing Dijkstra’s shortest path algorithm",
    tech_stack: "Java",
    has_github: false,
    github_url: "",
    has_demo: false,
    demo_url: "",
  },
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/sunsetcalc.png", 
    has_vid: true, 
    vid: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/sunsetcalculator.mp4", 
    title: "Sunset Calculator",
    company: "Personal Project",
    year: "Feb. 2021 – Jun. 2021",
    description: "a website that calculates the quality of upcoming sunsets and sunrises in an inputted zip code",
    contribution1: "converted an inputted zip code into longitude and latitude using Google Maps API",
    contribution2: "collected and presented sunrise/sunset data based on location using Sunset API",
    contribution3: "implemented with a partner (Emily Chen from MIT) using JavaScript, HTML, and CSS",
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
    year: "May. 2020 – Sep. 2020",
    description: "a web demo for the Cosine (Cloud-Cost Optimized NoSQL Storage Engine) research paper",
    contribution1: "collaborated with professor Stratos Idreos and his team from the Data Systems Laboratory",
    contribution2: "implemented the UI and algorithms for uploading uniform or skewed data to the demo using JavaScript",
    contribution3: "debugged and resolved issues involving corner cases for designing the storage engine configurations",
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
    name: "Java",
  },
  {
    name: "C#",
  },
  {
    name: ".NET",
  },
  {
    name: "React",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "C",
  },
  {
    name: "Python",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Git",
  },
  {
    name: "Agile",
  },
];

// about certifications
export const certificationsList = [
  {
    name: "Microsoft Azure Fundamentals",
    img: "https://images.credly.com/size/220x220/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
  }
]