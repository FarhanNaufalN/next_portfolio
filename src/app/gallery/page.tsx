'use client';
import Image from "next/image";
import { Row, Card, Media, AutoScroll,ShineFx, Avatar, Icon, Text,Line,Mask, MasonryGrid,Flex,Column } from "@once-ui-system/core";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export default function GalleryPage() {
  const images = [
    "/ikb1.jpg",
    "/education/organisasi/org1.png",
    "/ikb3.jpg",
    "/ikb2.jpg",
    "/education/organisasi/bem4.png",
    "/education/upi3.png",
    "/project/project8.png",
    "/education/organisasi/org2.png",
    "/project/project1.png",
    "/project/project3.png",
    "/project/project5.png",
    "/amati2.png",
    "/me2.png",
    "/education/organisasi/org5.png",
    "/me1.png",
    "/project/project8.png",
    "/amati2.png",
    "/project/project7.png",
    "/ikb3.jpg",
    "/project/project6.png",
  ];

  const certificates = [
  {
    title: "Android Expert",
    desc: "Certified by Dicoding",
    img: "/cert/androidexpert.png",
    item: "Dicoding"
    
  },
  {
    title: "Cloud Practitioner",
    desc: "Certified by Dicoding",
    img: "/cert/aws.png",
    item: "Dicoding"
    
  },
  {
    title: "Flutter Fundamental",
    desc: "Certified by Dicoding",
    img: "/cert/flutterf.png",
    item: "Dicoding"
    
  },
  {
    title: "Machine Learning for Android",
    desc: "Certified by Dicoding",
    img: "/cert/mla.png",
    item: "Dicoding"
    
  },
   {
    title: "Microsoft Certified Educator",
    desc: "Certified by Microsoft",
    img: "/cert/mce.png",
    item: "Microsoft"
    
  },
];


  const heights = [16, 6, 4, 6, 16, 12, 7, 24, 4, 12, 6, 2, 24, 17, 12, 5, 9, 6, 20, 11];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-me text-slate-900 dark:text-white">
      <main className="w-screen relative py-5">

             {/* ------------------ Certification ------------------ */}
<section id="certification" className="space-y-6">

  <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

  <div className="flex justify-center mb-8">
    <ShineFx speed={3}>
      <h1 className="text-center text-3xl font-bold mb-l">Certification</h1>
    </ShineFx>
  </div>

  <Mask fillWidth x={50} y={50} radius={20} borderBottom="neutral-medium" />

<AutoScroll>
  <Row direction="row" gap="24" paddingRight="24">
    {certificates.map((item, i) => (
      <Card
        key={i}
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
        width={24}     // ← ukuran per card
        className="shadow-md"
      >
        <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
          <Avatar size="xs" src="/Me.png" />
          <Text variant="label-default-s">Farhan Naufal</Text>
        </Row>

        <Media
          border="neutral-alpha-weak"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          alt={item.title}
          src={item.img}
        />

        <Column fillWidth paddingX="20" paddingY="24" gap="8">
          <Text variant="body-default-xl">{item.title}</Text>
          <Text onBackground="neutral-weak" variant="body-default-s">
            {item.desc}
          </Text>
        </Column>

        <Line background="neutral-alpha-medium" />

        <Row paddingX="20" paddingY="12" gap="8" vertical="center">
          <Icon name="like" size="s" />
          {item.item}
          <Icon name="chat" size="s" marginLeft="24" />
          
        </Row>
      </Card>
    ))}
  </Row>
</AutoScroll>

</section>



    <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />
             <div className="flex justify-center mb-8 mt-2 pt-10">
            <ShineFx speed={3}>
          <h1 className="text-center text-3xl font-bold mb-l mt-2 ">My Gallery</h1>
          </ShineFx>
          </div>
          <Mask
            fillWidth
            x={50}
            y={50}
            radius={20}
            borderBottom="neutral-medium"
            />

        <div className="flex justify-center">
        <Column center gap="8" className="mb-10" maxWidth={80}>
        <MasonryGrid
          padding="l"
          radius="l"
          background="surface"
          columns={6}
          m={{ columns: 4 }}
          s={{ columns: 2 }}
        >
          {heights.map((height, index) => (
            <Flex
              key={index}
              background="overlay"
              radius="l"
              border="neutral-alpha-medium"
              fill
              center
              height={height}
              className="overflow-hidden"
            >
              <Image
                src={images[index]}
                alt={`Gallery ${index}`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </Flex>
          ))}
        </MasonryGrid>
        </Column>
        </div>

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

      </main>
    </div>
  );
}
