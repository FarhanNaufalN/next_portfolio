'use client';

import { Hover, Column, Text, Tag, Card, Media, Row } from "@once-ui-system/core";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export default function ProjectPage() {

  const projects = [
    {
      title: "Smart Drone CV",
      desc: "Computer vision for real- time plastic waste detection using drones. Implemented object detection using YOLOv8n integrated with Mobile Application using Java and DJI MSDK (Mobile Software Development Kit) v5.1",
      img: "/project/project1.png",
      tag: "AI and Mobile",
      link: "https://www.canva.com/design/DAGM98H12GQ/ISiOLp5hUFOmOAfOKXfkHA/edit?utm_content=DAGM98H12GQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Platform Transparency and Security of Food Supply Chains ",
      desc: "Platform for Implementing Traceability Technology to Increase Transparency and Security of Food Supply Chains ",
      img: "/project/amati2.png",
      tag: "Mobile App",
      link: "https://youtu.be/JEjkLBigQrM?si=eZHq3LnuhO8b0KeL"
    },
    {
      title: "Inventory App",
      desc: "This application is equipped with features that enable users to easily manage member data, record and track item borrowings, as well as manage information related to activities and available inventory.",
      img: "/project/project3.png",
      tag: "Mobile App",
      link: "https://github.com/FarhanNaufalN/N-BlueAplikasiKesekretariatan"
    },
    {
      title: "Inventory System",
      desc: "Fullstack system using Laravel + MySQL for inventory management.",
      img: "/project/project4.png",
      tag: "Fullstack",
      link: "https://www.canva.com/design/DAGM98H12GQ/ISiOLp5hUFOmOAfOKXfkHA/edit?utm_content=DAGM98H12GQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Inventory Allocation Dashboard",
      desc: "This project implements clean architecture, ACID. The system is designed to help companies manage stock levels, allocate inventory efficiently, and process purchase requests with reliability and accuracy. using Next.js for frontend and Express.js for backend.",
      img: "/project/project5.png",
      tag: "Fullstack",
      link: "https://github.com/FarhanNaufalN/inventory-allocation-system"
    },
    {
      title: "My Portfolio Website",
      desc: "Built a personal portfolio website using Next.js and Once UI System to showcase my projects and skills effectively.",
      img: "/project/project7.png",
      tag: "Frontend",
      link: "#"
    },
    {
      title: "Story App",
      desc: "The app leverages APIs to communicate with the backend server, facilitating user registration, login, story uploads, and data retrieval in an efficient and structured manner. The Google Maps API is used to show the user's location on a map",
      img: "/project/project6.png",
      tag: "Mobile App",
      link: "https://www.canva.com/design/DAGM98H12GQ/ISiOLp5hUFOmOAfOKXfkHA/edit?utm_content=DAGM98H12GQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "T-01 KillerFly: UV-Based Insect Pest Killer Prototype",
      desc: "IoT Project. An insect pest killer prototype that utilizes UV light to attract and eliminate pests, integrated with IoT technology for remote monitoring and control.",
      img: "/project/project8.png",
      tag: "IoT",
      link: "https://www.canva.com/design/DAGM98H12GQ/ISiOLp5hUFOmOAfOKXfkHA/edit?utm_content=DAGM98H12GQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Cancer Detection App",
      desc: "Developed a mobile app using kotlin that utilizes machine learning models to detect cancer from medical images, providing users with quick and accurate preliminary assessments.",
      img: "/project/project9.png",
      tag: "Mobile App",
      link: "https://github.com/FarhanNaufalN/Cancer-Classification-App"
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10 px-4 bg-me text-slate-900  ">
      <main className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((p, index) => (
            <Hover
              key={p.title + index}
              tabIndex={-1}
              trigger={
                <Card
                  maxWidth={22}
                  minHeight={26}
                  padding="8"
                  direction="column"
                  radius="l-8"
                  href={p.link}
                >
                  <Media
                    fillWidth
                    aspectRatio="16 / 9"
                    radius="l"
                    alt={p.title}
                    src={p.img}
                    sizes="480px"
                  />
                  <Column fillWidth padding="20" gap="8">
                    <Text variant="heading-strong-m">{p.title}</Text>
                    <Text onBackground="neutral-weak" variant="body-default-s">
                      {p.desc}
                    </Text>
                  </Column>
                </Card>
              }
              overlay={
                <Tag position="absolute" top="24" right="24">
                  {p.tag}
                </Tag>
              }
            />
          ))}
        </div>

        <footer className="pt-10 mt-16 text-center text-sm text-slate-600 ">
          <div className="flex justify-center mb-8">
          
            <Row gap="8" align="center" className="flex-wrap justify-center"> 
              
              <span>© {new Date().getFullYear()} Farhan Naufal N</span> 

             
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <AiFillInstagram size={20} /> 
                <a href="https://www.instagram.com/hans_nafl/" target="_blank" rel="noopener noreferrer" className="sr-only">Instagram</a>
                
                <AiFillLinkedin size={20} />
                <a href="https://www.linkedin.com/in/farhannaufalnurdiansyah/" target="_blank" rel="noopener noreferrer" className="sr-only">LinkedIn</a>
                
                <AiFillGithub size={20} />
                <a href="https://github.com/FarhanNaufalN/" target="_blank" rel="noopener noreferrer" className="sr-only">GitHub</a>
              </div>
            </Row>
          </div>
        </footer>
      </main>
    </div>
  );
}


