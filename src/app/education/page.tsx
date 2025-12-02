import Image from "next/image";
import {
  Badge,
  Row,
  Card,
  Media,
  TypeFx,
  Carousel,
  ShineFx,
  Avatar,
  AutoScroll,
  Fade,
  HeadingNav,
  Column,
  Text,
  CompareImage,
  Mask
} from "@once-ui-system/core";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Header from "@/component/header";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-4 bg-me text-slate-900 dark:text-white justify-center">
      <main className="w-full max-w-5xl mx-auto space-y-16">

        {/* ------------------ EDUCATION ------------------ */}
        <section id="education" className="space-y-6">
            
            <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
            <div className="flex justify-center mb-8">
            <ShineFx speed={3}>
          <h1 className="text-center text-3xl font-bold mb-l">Education</h1>
          </ShineFx>
          </div>
          <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
            

         <Card className="p-6 space-y-4 rounded-4xl bg-white/10 border border-white/20 w">
             <Column fillWidth paddingX="20" paddingY="24" gap="8">
            <h3 className="font-semibold text-xl">
                Universitas Pendidikan Indonesia (2021–2025)
            </h3>

            <p>Bachelor's Degree in Computer Engineering — GPA 3.86/4.00 (Cum Laude)</p>

            <ul className="list-disc ml-5 space-y-3">
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

            <Carousel
                items={[
                    { slide: <Row height={20} fill center radius="s" background="brand-strong"><Media src="/education/upi3.png" ></Media></Row> },
                    { slide: <Row height={20} fill center radius="s" background="accent-strong"><Media src="/education/upi2.png"></Media></Row> },
                ]}
                />
            </Card>

          <Card className="p-6 space-y-4 rounded-4xl bg-white/10 border border-white/20 w">
            <div className="justify-center mt-s" >
            <CompareImage
                radius="xl"
                border="neutral-alpha-weak"
                overflow="hidden"
                width={30}
                height={16}
                leftContent={{ src: "/education/bangkit1.png", alt: "Image 1" }}
                rightContent={{ src: "/education/bangkit2.png", alt: "Image 2" }}
                />
            </div>
            <Column fillWidth paddingX="24" paddingY="24" gap="8">
            <div className="pl-l">
            <h3 className="font-semibold text-xl">
              Bangkit Academy (Feb 2024 – Jul 2024)
            </h3>
            <p>Mobile Development — Distinction Graduate (92.09/100)</p>
            <ul className="list-disc ml-5 mt-s">
              <li>Top 10% graduate</li>
              <li>Developed Story App, GitHub Finder, ML-based cancer detector, SME Traceability Platform</li>
              <li>Team Leader — Best Team Award in Company-Track Capstone</li>
              <li>Completed 13 certificates in Android & Applied ML</li>
            </ul>
            </div>
            </Column>

            
          </Card>

        </section>

        {/* ------------------ ORGANIZATIONAL EXPERIENCE ------------------ */}
        <section id="organization" className="space-y-6">

           
              <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
             <div className="flex justify-center mb-8">
            <ShineFx speed={3}>
          <h1 className="text-center text-3xl font-bold mb-l">Organizational Experience</h1>
          </ShineFx>
          </div>
          <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
            

          <Card className="p-6 space-y-4 rounded-3xl bg-white/10 border border-white/20">
        
          <Row fillWidth gap="8" >
          <Column fillWidth paddingX="24" paddingY="24" gap="8">
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
            <Column fillWidth paddingX="24" paddingY="24" gap="8">
            
              <Row maxWidth={32} height={8} gap="8">
                <Media
                    
                    radius="l"
                    src="/education/organisasi/org1.png"
                />
                <Media
                    
                    radius="l"
                    src="/education/organisasi/org2.png"
                />
                <Media
                    
                    radius="l"
                    src="/education/organisasi/org3.png"
                />
            </Row>

            <Row maxWidth={32} height={8} gap ="8">
                <Media
                 
                    radius="l"
                    src="/education/organisasi/org4.png"
                />
                <Media
                    
                    radius="l"
                    src="/education/organisasi/org5.png"
                />
            </Row>
            </Column>
        </Row>
        
          </Card>
            
          <Card className="p-6 space-y-4 rounded-3xl bg-white/10 border border-white/20">
          <Column fillWidth paddingX="24" paddingY="24" gap="8">
            
              <Row maxWidth={32} height={8} gap="8">
                <Media
                    
                    radius="l"
                    src="/education/organisasi/bem1.png"
                />
                
                <Media
                    
                    radius="l"
                    src="/education/organisasi/bem2.png"
                />
            </Row>

            <Row maxWidth={32} height={8} gap ="8">
                <Media
                 
                    radius="l"
                    src="/education/organisasi/bem3.png"
                />
                <Media
                    
                    radius="l"
                    src="/education/organisasi/bem4.png"
                />
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
