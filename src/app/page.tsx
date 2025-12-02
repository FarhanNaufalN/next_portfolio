'use client';

import Image from "next/image";
import { Badge, Row, TypeFx, Carousel,ShineFx, Avatar, Mask  } from "@once-ui-system/core";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-me text-slate-900 dark:text-white "
    >

      <main className="w-screen relative py-5">

       
        
        {/* Hero Section */}
        <section className="text-start ">
          <div className="flex justify-center  ml-20 gap-6">
            <div className="sticky top-20 h-fit">
              <Image
                src="/Me.png"
                alt="Farhan Naufal N"
                width={180}
                height={180}
                className="rounded-full shadow-xl shadow-blue-300/50 dark:shadow-blue-800/40 object-cover"
              />
              <div className="pl-5 pt-5">
              <Badge id="badge-2" title="Indonesia / Bandung"  arrow={false} paddingLeft="12" paddingRight="16" paddingY="8" onBackground="brand-medium" background="brand-medium" />
              </div>
            </div>



            <div className="sm:pl-10 mt-12 pb-5">
              <ShineFx speed={3}>
              <h1 className="text-4xl font-bold mb-2 text-slate-800 dark:text-white">
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


              <p className="text-slate-600 dark:text-white max-w-lg pt-12 ">
                Software Engineer, IoT, AI, and Mobile Development Enthusiast.
                Passionate about building scalable systems, drone-based CV models,
                and real-world IoT solutions.
              </p>

              <div className="flex items-center gap-4 mt-12">
                <div className="flex items-center gap-2">
                    <AiFillLinkedin className="w-5 h-5 text-blue-600 dark:text-white" aria-hidden />
                  <Badge href="https://www.linkedin.com/in/farhannaufalnurdiansyah/" id="badge-1" title="LinkedIn" textVariant="label-default-s" color="blue" />
                </div>

                <div className="flex items-center gap-2">
                    <AiFillGithub className="w-5 h-5 text-slate-800 dark:text-white" aria-hidden />
                  <Badge href="https://github.com/FarhanNaufalN/" id="badge-2" title="GitHub"  textVariant="label-default-s" />
                </div>

                <div className="flex items-center gap-2">
                    <AiFillInstagram className="w-5 h-5 text-pink-500 dark:text-white" aria-hidden />
                  <Badge href="https://www.instagram.com/hans_nafl/" id="badge-3" title="Instagram" textVariant="label-default-s" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className=" mt-10 space-y-8 flex flex-col items-center">
           <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
           <ShineFx speed={3}>
          <h2 className="text-3xl font-semibold pb-5 dark:text-white pb-5">
            Work Experience
          </h2>
            </ShineFx>
          <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
          <div className="space-y-6 w-full max-w-2xl">
            {/* PT. INSTALASI KECERDASAN BUATAN */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold dark:text-white">PT. INSTALASI KECERDASAN BUATAN</h3>
              <div className="text-cyan-600 dark:text-cyan-300">
                <span className="font-semibold text-cyan-700 dark:text-cyan-400">Fullstack Developer - Internship</span>
                <span className="ml-4 text-gray-600 dark:text-gray-400">(Sep 2024 – April 2025)</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Assisted the founder in explaining AI product concepts and implementations to stakeholders and potential partners.</li>
                <li>Designed and built databases for data models to support efficient data management and storage.</li>
                <li>Optimized data structures to meet the requirements of AI product development.</li>
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <div className="w-80 sm:w-96">
                <Carousel
                  sizes="100%"
                  className="rounded-lg overflow-hidden"
                  items={[
                    { slide: "/ikb1.jpg", alt: "Image 1" },
                    { slide: "/ikb2.jpg", alt: "Image 2" },
                    { slide: "/ikb3.jpg", alt: "Image 3" },
                  ]}
                />
              </div>
            </div>

            {/* PT. AMATI INDONESIA */}
            <div className="space-y-3 pt-10">
              <h3 className="text-xl font-semibold dark:text-white">PT. AMATI INDONESIA</h3>
              <div className="text-cyan-600 dark:text-cyan-300">
                <span className="font-semibold text-cyan-700 dark:text-cyan-400">Mobile Developer - Internship</span>
                <span className="ml-4 text-gray-600 dark:text-gray-400">(Feb 2024 – Jul 2024)</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Led Project Team : Directed a cross-functional team of 6 members in designing and implementing traceability technology, enhancing transparency and security across food supply chains.</li>
                <li>Monitored Project Progress: Oversaw project milestones with weekly updates, resolving over 15 critical issues and ensuring the project stayed budget and on track.</li>
                <li>Developed Mobile Application: Built the mobile application using Kotlin, integrating it with database using RESTful APIs to support real-time traceability and data synchronization.</li>
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <div className="w-80 sm:w-96">
                <Carousel
                  sizes="100%"
                  className="rounded-lg overflow-hidden"
                  items={[
                    { slide: "/amati1.png", alt: "Image 1" },
                    { slide: "/amati2.png", alt: "Image 2" },
                    { slide: "/amati3.png", alt: "Image 3" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

       {/* Skills Section */}
        <section className="mt-12 pt-14 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex justify-center mb-8">
            <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
          <ShineFx speed={3}>
          <h2 className="text-3xl font-semibold pb-5 dark:text-white text-center justify-center">
            Tech Stack
          </h2>
          </ShineFx>
          <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
          </div>

          {/* Row 1 */}
          <div className="flex justify-center">
            <Row gap="16">
              <Avatar src="/logos/client-1.png" size="l" />
              <Avatar src="/logos/client-2.png" size="l" />
              <Avatar src="/logos/client-3.png" size="l" />
              <Avatar src="/logos/client-4.png" size="l" />
              <Avatar src="/logos/client-5.png" size="l" />
              <Avatar src="/logos/client-6.png" size="l" />
            </Row>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center mt-6">
            <Row gap="16">
              <Avatar src="/logos/client-7.png" size="l" />
              <Avatar src="/logos/client-8.png" size="l" />
              <Avatar src="/logos/client-9.png" size="l" />
              <Avatar src="/logos/client-10.png" size="l" />
              <Avatar src="/logos/client-11.png" size="l" />
              <Avatar src="/logos/client-12.png" size="l" />
            </Row>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center mt-6">
            <Row gap="16">
              <Avatar src="/logos/client-13.png" size="l" />
              <Avatar src="/logos/client-14.jpg" size="l" />
              <Avatar src="/logos/client-15.png" size="l" />
              <Avatar src="/logos/client-16.png" size="l" />
              <Avatar src="/logos/client-17.jpg" size="l" />
            </Row>
          </div>
        </section>


       

        {/* Footer */}
        <footer className="pt-10 mt-16 text-center text-sm text-slate-600 dark:text-white">
          <div className="flex justify-center mb-8">
          <Row gap="8" align="center">
            © {new Date().getFullYear()} Farhan Naufal N 

            <div className="ml-s grid-row-3 width-fit flex items-center gap-2">
              <AiFillInstagram size={24} />
              <a
                href="https://www.instagram.com/hans_nafl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
              </a>
              <AiFillLinkedin size={24} />
              <a
                href="https://www.linkedin.com/in/farhannaufalnurdiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
              </a>
              <AiFillGithub size={24} />
              <a
                href="https://github.com/FarhanNaufalN/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
              </a>
            </div>
            </Row>
            </div>
        </footer>

      </main>
    </div>
  );
}
