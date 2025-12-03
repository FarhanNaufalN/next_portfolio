'use client';

import Image from "next/image";
import { Badge, Row, TypeFx, Carousel, ShineFx, Avatar, Mask } from "@once-ui-system/core";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';


export default function Home() {
  return (
   
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-me text-slate-900  ">

      {/* Main Content Area */}
      <main className="w-full max-w-4xl relative py-5 px-4 sm:px-6 lg:px-8"> 
        
        {/* --- Hero Section --- */}
        <section className="text-start ">
          {/* PERBAIKAN: Layout Vertikal di Mobile, Horizontal di Small/Medium */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6">
            
        
            <div className="relative w-fit flex flex-col items-center sm:items-start sm:sticky sm:top-20 sm:h-fit mb-6 sm:mb-0">
              <Image
                src="/Me.png"
                alt="Farhan Naufal N"
                width={150} 
                height={150}
                className="rounded-full shadow-xl object-cover"
              />
             
              <div className="pt-5 flex justify-center w-full sm:pl-5"> 
                <Badge id="badge-2" title="Indonesia / Bandung" arrow={false} paddingLeft="12" paddingRight="16" paddingY="8" onBackground="brand-medium" background="brand-medium" />
              </div>
            </div>

         
            <div className="sm:pl-10 mt-6 sm:mt-12 pb-5 text-center sm:text-left">
              <ShineFx speed={3}>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-800 ">
                  Farhan Naufal N
                </h1>
              </ShineFx>
              <div className="pt-3">
                <TypeFx
                  words={["Software Engineer", "Internet of Things", "AI Enthusiast", "Mobile Developer"]}
                  speed={80}
                  hold={2000}
                  trigger="instant"
                />
              </div>

              <p className="text-slate-600  max-w-lg pt-8 sm:pt-12 mx-auto sm:mx-0">
                Software Engineer, IoT, AI, and Mobile Development Enthusiast.
                Passionate about building scalable systems, drone-based CV models,
                and real-world IoT solutions.
              </p>

             
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-8 sm:mt-12">
                <div className="flex items-center gap-2">
                  <AiFillLinkedin className="w-5 h-5 text-blue-600 " aria-hidden />
                  <Badge href="https://www.linkedin.com/in/farhannaufalnurdiansyah/" id="badge-1" title="LinkedIn" textVariant="label-default-s" color="blue" />
                </div>
                <div className="flex items-center gap-2">
                  <AiFillGithub className="w-5 h-5 text-slate-800 " aria-hidden />
                  <Badge href="https://github.com/FarhanNaufalN/" id="badge-2" title="GitHub" textVariant="label-default-s" />
                </div>
                <div className="flex items-center gap-2">
                  <AiFillInstagram className="w-5 h-5 text-pink-500 " aria-hidden />
                  <Badge href="https://www.instagram.com/hans_nafl/" id="badge-3" title="Instagram" textVariant="label-default-s" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Work Experience --- */}
        <section className="mt-10 space-y-8 flex flex-col items-center">

          <ShineFx speed={3}>
            <h2 className="text-3xl font-semibold pb-5 ">
              Work Experience
            </h2>
          </ShineFx>

          <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

         
          <div className="space-y-6 w-full max-w-2xl px-2 sm:px-0"> 
            
           
            <div className="space-y-6">
              <h3 className="text-xl font-semibold ">PT. INSTALASI KECERDASAN BUATAN</h3>
              <div className="text-cyan-600 dark:text-cyan-300 flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-cyan-700 dark:text-cyan-400">Fullstack Developer - Internship</span>
                <span className="ml-0 sm:ml-4 text-gray-600 dark:text-gray-400">(Sep 2024 – April 2025)</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Assisted the founder in explaining AI product concepts and implementations to stakeholders and potential partners.</li>
                <li>Designed and built databases for data models to support efficient data management and storage.</li>
                <li>Optimized data structures to meet the requirements of AI product development.</li>
              </ul>
            </div>

           
            <div className="flex justify-center pt-4">
              <div className="w-full max-w-sm sm:w-96"> 
                <Carousel
                  sizes="100%"
                  className="rounded-lg overflow-hidden"
                  items={[{ slide: "/ikb1.jpg", alt: "Image 1" }, { slide: "/ikb2.jpg", alt: "Image 2" }, { slide: "/ikb3.jpg", alt: "Image 3" }]}
                />
              </div>
            </div>

           
            <div className="space-y-3 pt-10">
              <h3 className="text-xl font-semibold ">PT. AMATI INDONESIA</h3>
              <div className="text-cyan-600 dark:text-cyan-300 flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-cyan-700 dark:text-cyan-400">Mobile Developer - Internship</span>
                <span className="ml-0 sm:ml-4 text-gray-600 dark:text-gray-400">(Feb 2024 – Jul 2024)</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Led Project Team : Directed a cross-functional team of 6 members in designing and implementing traceability technology, enhancing transparency and security across food supply chains.</li>
                <li>Monitored Project Progress: Oversaw project milestones with weekly updates, resolving over 15 critical issues and ensuring the project stayed budget and on track.</li>
                <li>Developed Mobile Application: Built the mobile application using Kotlin, integrating it with database using RESTful APIs to support real-time traceability and data synchronization.</li>
              </ul>
            </div>
            
            <div className="flex justify-center pt-4">
              <div className="w-full max-w-sm sm:w-96">
                <Carousel
                  sizes="100%"
                  className="rounded-lg overflow-hidden"
                  items={[{ slide: "/amati1.png", alt: "Image 1" }, { slide: "/amati2.png", alt: "Image 2" }, { slide: "/amati3.png", alt: "Image 3" }]}
                />
              </div>
            </div>

          </div>
        </section>

       
        <section className="mt-12 pt-14 px-4 sm:px-0"> 
          
          {/* Judul */}
          
          <div className="flex justify-center mb-8">
            <ShineFx speed={3}>
              <h2 className="text-3xl font-semibold pb-5  text-center justify-center">
                Tech Stack
              </h2>
            </ShineFx>
          </div>
           <Mask fillWidth x={50} y={50} radius={30} borderBottom="neutral-medium" />

          
          <div className="space-y-6 flex flex-col items-center mt-24">
            
            
            {[
              ["/logos/client-1.png", "/logos/client-2.png", "/logos/client-3.png", "/logos/client-4.png", "/logos/client-5.png", "/logos/client-6.png"],
              ["/logos/client-7.png", "/logos/client-8.png", "/logos/client-9.png", "/logos/client-10.png", "/logos/client-11.png", "/logos/client-12.png"],
              ["/logos/client-13.png", "/logos/client-14.jpg", "/logos/client-15.png", "/logos/client-16.png", "/logos/client-17.jpg"],
            ].map((logos, index) => (
              <div key={index} className="flex justify-center w-full">
                <Row gap="8" className="flex-wrap justify-center w-full max-w-full"> {/* Tambahkan flex-wrap */}
                  {logos.map((src, logoIndex) => (
                    <Avatar 
                      key={logoIndex} 
                      src={src} 
                      size="m" 
                      className="sm:size-l" 
                    />
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </section>
        
       
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