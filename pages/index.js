import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nyamisa Chelagat Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbynyamisa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="mailto:nyamisachelagat@gmail.com"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nyamisa Chelagat
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web2/Web3 Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi, I'm Nyamisa, a passionate web2 and web3 developer with a strong interest in civic tech. I am dedicated to building innovative solutions that bridge the gap between traditional and decentralized technologies, aiming to create impactful applications that empower communities and enhance civic engagement.
            </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://x.com/Nyamisa_Chela" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/nyamisa-chelagat/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
              </a>
              <a href="https://github.com/Nyamisachela" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
              </a>
                </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">What do I offer?</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I bring over five years of experience in <span className="text-teal-500"> project management, team leadership, and web development </span>. 
            I have successfully led diverse teams, both in <span className="text-teal-500"> corporate </span> environments and <span className="text-teal-500"> volunteer-driven projects </span>
            , ensuring smooth execution of initiatives across various sectors. My expertise includes managing the entire <span className="text-teal-500"> project lifecycle</span> , from <span className="text-teal-500"> planning </span> and <span className="text-teal-500"> coordination</span> to <span className="text-teal-500"> delivery </span>, while fostering collaboration among cross-functional teams. 
            As a <span className="text-teal-500"> web developer</span>, I specialize in <span className="text-teal-500"> back-end develoment</span>, utilizing technologies like <span className="text-teal-500"> React,Next.js, node.js</span> and the <span className="text-teal-500"> MERN</span> stack. 
            Additionally, I have hands-on experience in writing <span className="text-teal-500"> smart contracts</span>, enabling blockchain-based solutions that drive transparency and accountability.
           
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="text-teal-500"> These are my current projects:</span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              <span className="text-teal-500"> The People's Baraza</span>
              </h3>
              <p className="py-2">
              Kumbi-The People's Baraza leverages blockchain technology to enhance transparency and accountability in civic engagement, enabling secure and verifiable participation in governance processes while empowering citizens to address community issues collaboratively.

              </p>
              <h4 className="py-4 text-teal-600"></h4>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              <span className="text-teal-500"> A Missing Persons Database</span>
              </h3>
              <p className="py-2">
              KumbiTrace is a dedicated missing persons database designed to address the growing issue of enforced disappearances and missing individuals in Kenya. The platform aims to maintain a comprehensive database that not only tracks and reports cases of missing persons but also serves as a vital resource for affected families. By connecting these families with professional therapists, KumbiTrace provides essential emotional and psychological support during their challenging times. This holistic approach not only helps in raising awareness about the plight of missing persons but also fosters a sense of community and healing for those impacted, ensuring that no one faces their struggles alone.

              </p>
              <h4 className="py-4 text-teal-600"></h4>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <span className="text-teal-500"> A Blockchain Voting System for Transparent Democracy </span>
              <p className="py-2">
              KumbiVote is a cutting-edge blockchain voting system designed to revolutionize the electoral process by ensuring transparency and accountability. By harnessing the power of smart contracts, KumbiVote eliminates the risks of manipulation and fraud that often plague traditional voting methods. Each vote cast is securely recorded on an immutable blockchain, creating a transparent and verifiable audit trail that can be accessed by all stakeholders. This innovative platform not only streamlines the voting process but also empowers citizens to independently verify the integrity of their votes. With KumbiVote, we are committed to fostering trust in the democratic process and ensuring that every voice is heard and counted.

              </p>
              <h4 className="py-4 text-teal-600"></h4>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1"></p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a backend developer and project manager, 
            I’ve led diverse teams and collaborated with skilled professionals on impactful projects. 
            As the founder of <span className="text-teal-500">Kumbi</span>, 
            I manage a team of 11, where I oversee project execution while also contributing to <span className="text-teal-500">backend development</span>. 
            My role involves designing and managing <span className="text-teal-500">server-side logic</span>, <span className="text-teal-500">databases</span>, and <span className="text-teal-500">APIs</span>, ensuring efficient system architecture. 
            I also write <span className="text-teal-500">smart contracts</span> to integrate blockchain solutions into our projects, with a focus on creating civic tech tools that drive transparency and accountability.

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Overall, I bring a unique blend of <span className="text-teal-500">technical expertise</span> and <span className="text-teal-500">leadership experience</span> to every project I undertake.
    
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        //<div className="basis-1/3 flex-1 ">
             //<Image
               //className="rounded-lg object-cover"
               //width={"100%"}
               // height={"100%"}
                //layout="responsive"
                //src={web1}
             // />
            //</div>
            //<div className="basis-1/3 flex-1">
            // <Image
             // className="rounded-lg object-cover"
               // width={"100%"}
                //height={"100%"}
                //layout="responsive"
                //src={web2}
              ///>
            //</div>
            //<div className="basis-1/3 flex-1">
             // <Image
                //className="rounded-lg object-cover"
                //width={"100%"}
                //height={"100%"}
                //layout="responsive"
                //src={web3}
              />
            </div>
            //<div className="basis-1/3 flex-1">
              //<Image
                //className="rounded-lg object-cover"
                //width={"100%"}
                //height={"100%"}
                //layout="responsive"
                //src={web4}
              ///>
            //</div>
            //<div className="basis-1/3 flex-1">
              //<Image
                //className="rounded-lg object-cover"
                //width={"100%"}
                //height={"100%"}
                //layout="responsive"
                //src={web5}
              ///>
            //</div>
            //<div className="basis-1/3 flex-1">
              //<Image
                //className="rounded-lg object-cover"
                //width={"100%"}
                //height={"100%"}
                //layout="responsive"
                //src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
