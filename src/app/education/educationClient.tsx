'use client';

import { Row, Card, Media, Carousel, ShineFx, Column, CompareImage, Mask } from "@once-ui-system/core";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function EducationClient() {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-4 bg-me text-slate-900 justify-center">

      <div className="flex min-h-screen flex-col items-center py-10 px-4 bg-me text-slate-900 justify-center">

        {/* ------------------ EDUCATION ------------------ */}
        <section id="education" className="space-y-6">
          <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />
          <div className="flex justify-center mb-8">
            <ShineFx speed={3}>
              <h1 className="text-center text-3xl font-bold mb-l">Education</h1>
            </ShineFx>
          </div>
          <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

          <div className="w-full flex justify-center">
  <Card className="p-6 space-y-4 rounded-4xl bg-white/10 border border-white/20 w-full max-w-xl">

    
    <Column className="w-full flex flex-col items-center gap-6">

      
      <Column fillWidth paddingX="20" paddingY="24" gap="8" className="text-center sm:text-left">
        <h3 className="font-semibold text-xl">
          Universitas Pendidikan Indonesia (2021–2025)
        </h3>

        <p>
          Bachelor's Degree in Computer Engineering — GPA 3.86/4.00 (Cum Laude)
        </p>

        <ul className="list-disc ml-5 space-y-3 text-left">
          <li>
            PKM-GFT University Level Pass
            <p className="ml-4 text-sm opacity-80">(2023)</p>
          </li>

          <li>
            Laboratory Assistant — Oriented Object Programming
            <p className="ml-4 text-sm opacity-80">(Mar 2024 – Jul 2024)</p>
          </li>

          <li>
            Laboratory Assistant — Mobile Development
            <p className="ml-4 text-sm opacity-80">(Jul 2024 – Dec 2024)</p>
          </li>
        </ul>
      </Column>

      
      <div className="w-full flex justify-center">
        <Carousel
  items={[
    {
      slide: (
        <div className="flex justify-center w-full">
          <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden bg-brand-strong">
            <Media
              src="/education/upi3.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      slide: (
        <div className="flex justify-center w-full">
          <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden bg-accent-strong">
            <Media
              src="/education/upi2.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ]}
/>
      </div>

    </Column>
  </Card>
</div>


  <div className="w-full flex justify-center place-items-center">
  <Card className="p-6 space-y-4 rounded-4xl bg-white/10 border border-white/20 w-full max-w-xl place-items-center">

    <Column className="w-full flex flex-col items-center gap-6">

      
      <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden">
        <CompareImage
          radius="xl"
          border="neutral-alpha-weak"
          overflow="hidden"
          className="w-full h-full"
          leftContent={{ src: "/education/bangkit1.png" }}
          rightContent={{ src: "/education/bangkit2.png" }}
        />
      </div>

     
      <Column fillWidth paddingX="24" paddingY="24" gap="8" className="text-center sm:text-left">
        <h3 className="font-semibold text-xl">
          Bangkit Academy (Feb 2024 – Jul 2024)
        </h3>

        <p>
          Mobile Development — Distinction Graduate (92.09/100)
        </p>

        <ul className="list-disc ml-5 mt-s text-left">
          <li>Top 10% graduate</li>
          <li>Developed Story App, GitHub Finder, ML-based cancer detector, SME Traceability Platform</li>
          <li>Team Leader — Best Team Award in Company-Track Capstone</li>
          <li>Completed 13 certificates in Android & Applied ML</li>
        </ul>
      </Column>

    </Column>
  </Card>
</div>

        </section>

        {/* ------------------ ORGANIZATIONAL EXPERIENCE ------------------ */}
        <section id="organization" className="space-y-6 mt-16">
          <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

          <div className="flex justify-center mb-8">
            <ShineFx speed={3}>
              <h1 className="text-center text-3xl font-bold mb-l">Organizational Experience</h1>
            </ShineFx>
          </div>

          <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

        
          <div className="w-full flex justify-center">
            <Card className="p-6 space-y-4 rounded-3xl bg-white/10 border border-white/20 w-full max-w-5xl">

              <Row fillWidth gap="8" className="flex flex-col lg:flex-row">
              
                <Column fillWidth paddingX="24" paddingY="24" gap="8" className="lg:w-1/2">
                  <h3 className="font-semibold text-xl mr-xl">
                    Executive Chairman — Computer Engineering Student Association
                  </h3>
                  <p>Mar 2023 – Jan 2024</p>
                  <ul className="list-disc ml-5">
                    <li>Led an organization of 47 people</li>
                    <li>Managed 49 work programs</li>
                    <li>Supervised 9 divisions</li>
                  </ul>
                </Column>

                
                <Column
                  fillWidth
                  paddingX="24"
                  paddingY="24"
                  gap="8"
                  className="flex flex-col items-center lg:items-start lg:w-1/2"
                >
                  <Row maxWidth={32} height={8} gap="8" className="flex justify-center">
                    <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/org1.png" />
                    <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/org2.png" />
                    <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/org3.png" />
                  </Row>

                  <Row maxWidth={32} height={8} gap="8" className="flex justify-center">
                    <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/org4.png" />
                    <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/org5.png" />
                  </Row>
                </Column>
              </Row>
            </Card>
          </div>

         
          <div className="w-full flex justify-center">
            <Card className="p-6 space-y-4 rounded-3xl bg-white/10 border border-white/20 w-full max-w-5xl">

              <Column fillWidth paddingX="24" paddingY="24" gap="8" className="flex items-center lg:items-start">
                <Row maxWidth={32} height={8} gap="8" className="flex justify-center">
                  <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/bem1.png" />
                  <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/bem2.png" />
                </Row>

                <Row maxWidth={32} height={8} gap="8" className="flex justify-center">
                  <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/bem3.png" />
                  <Media className="w-24 h-24 sm:w-32 sm:h-32 object-cover" radius="l" src="/education/organisasi/bem4.png" />
                </Row>
              </Column>

              <Column fillWidth paddingX="24" paddingY="24" gap="8">
                <h3 className="font-semibold text-xl">
                  Director General — BEM Ministry of Non-Academic Affairs
                </h3>
                <p>Mar 2023 – Jan 2024</p>
                <ul className="list-disc ml-5">
                  <li>Handled non-academic events for UPI Cibiru students</li>
                  <li>Organized August 17 Competitions, PORSEMA, etc.</li>
                </ul>
              </Column>
            </Card>
          </div>
        </section>

      
        <footer className="pt-10 mt-16 text-center text-sm text-slate-600 dark:text-white">
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
      </div>
    </div>
  );
}
