import { motion } from "framer-motion";
import { FaBootstrap, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiChakraui,
  SiCss3,
  SiDjango,
  SiGatsby,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTestinglibrary,
  SiVite,
  // SiVitest,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import Title from "./Title";

const iconTextPairs = [
  { icon: <BiLogoTypescript className="text-4xl" />, text: "Typescript" },
  { icon: <FaJs className="text-4xl" />, text: "Javascript" },
  { icon: <FaPython className="text-4xl" />, text: "Python" },
  { icon: <SiReact className="text-4xl" />, text: "React" },
  { icon: <SiNextdotjs className="text-4xl" />, text: "Next.js" },
  { icon: <SiVite className="text-4xl" />, text: "Vite" },
  { icon: <SiGatsby className="text-4xl" />, text: "Gatsby" },
  { icon: <SiDjango className="text-4xl" />, text: "Django" },
  { icon: <FaHtml5 className="text-4xl" />, text: "Html5" },
  { icon: <SiCss3 className="text-4xl" />, text: "CSS" },
  { icon: <SiTailwindcss className="text-4xl" />, text: "Tailwind" },
  { icon: <SiChakraui className="text-4xl" />, text: "Chakra UI" },
  { icon: <FaBootstrap className="text-4xl" />, text: "Bootstrap" },
  { icon: <SiTestinglibrary className="text-4xl" />, text: "React test. lib" },
  { icon: <SiJest className="text-4xl" />, text: "Jest" },
  // { icon: <SiVitest className="text-4xl" />, text: "Vitest" },
];

function Technologies(): JSX.Element {
  const { ref, inView } = useInView();

  return (
    <>
      <Title text="Technologies" />
      <div
        className="flex flex-wrap justify-center 
        items-center"
        ref={ref}
      >
        {iconTextPairs.map((pair, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: inView ? index * 0.2 : 0 }}
            className="w-1/3 p-4 lg:w-[20%] flex flex-col items-center"
            style={{ marginTop: "20px" }}
          >
            {pair.icon}
            <p>{pair.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Technologies;
