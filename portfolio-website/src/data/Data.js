// projects
export const projectsList = [
  {
    img: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/melodygenerator.jpg",
    has_vid: true,
    has_sound: true,
    vid: "https://raw.githubusercontent.com/Sydney-tran/portfolio/main/portfolio-website/src/assets/melodygenerator.mp4",
    title: "The Melody Generator",
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
    partner2: { name: "Tori Zhang", url: "" },
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
      "an application that helps financiers and stock traders retrieve quality market information through chat bots in platforms such as Microsoft Teams",
    has_partner1: false,
    has_partner2: false,
    has_partner3: false,
    contribution1:
      "built frontend and backend of the internal administration site for managing FinOwl users and products",
    contribution2:
      "developed a REST API with .NET 6 using n-tier architecture with unit and integration tests",
    contribution3:
      "implemented SPA using React with TypeScript, RTK Query from Redux Toolkit, and a Metronic Bootstrap template",
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
    title: "Design@Cornell ",
    year: "Nov. 2021 – Present",
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
    tech_stack: "React, TypeScript, HTML, CSS",
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
    partner2: { name: "Tori Zhang", url: "" },
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
  },
];
