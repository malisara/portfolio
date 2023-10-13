import Lottie from "lottie-react";

import BtnGithub from "./BtnGithub";
import { motion } from "framer-motion";
import CozyGif from "../lotties/CozyGif.json";
import HangryExolorerGif from "../lotties/HangryExolorerGif.json";
import SirCakeGif from "../lotties/SirCakeGif.json";
import PlantyGif from "../lotties/PlantyGif.json";
import Title from "./Title";

const projectData = [
  {
    icon: CozyGif,
    title: "Cozzy",
    tech: "TypeScript + React + Next.js",
    description: "Clothing e-commerce store.",
    url: "https://github.com/malisara/cozzy",
  },

  {
    icon: HangryExolorerGif,
    title: "The Hangry Explorer",
    tech: "TypeScript + React + Vite",
    description: "Recipe app.",
    url: "https://github.com/malisara/the-hangry-explorer",
  },

  {
    icon: SirCakeGif,
    title: "Sir Cake",
    tech: "Django + Python",
    description: "Cake store e-commerce",
    url: "https://github.com/malisara/sir-cake",
  },
  {
    icon: PlantyGif,
    title: "Planty",
    tech: "Django + Python",
    description: "Marketplace for exchanging plants.",
    url: "https://github.com/malisara/planty",
  },
];

function Projects(): JSX.Element {
  return (
    <>
      <Title text="Projects" />
      <div className="flex-row border-5">
        {projectData.map((project, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <div className="flex flex-col md:flex-row md:gap-10">
              <div
                className="md:w-[45%] flex justify-center
               md:justify-end md:items-center"
              >
                <Lottie
                  animationData={project.icon}
                  // height={5}
                  // width={4}
                  autoplay={false}
                  loop={false}
                  style={{ height: 300 }}
                />
              </div>
              <div
                className="flex flex-col gap-6 my-10 items-center 
                text-center md:items-start md:text-start"
              >
                <p className="text-2xl font-bold">{project.title}</p>
                <p className="italic">{project.tech}</p>
                <p className="text-lg">{project.description}</p>

                <BtnGithub link={project.url} />
              </div>
            </div>
            {i < projectData.length - 1 && (
              <div className="h-[1px] w-[60%] mx-auto my-[3rem] bg-secondaryColor"></div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
