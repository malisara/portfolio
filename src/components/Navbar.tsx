//todo change bg color
//add links

import { useRef, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { PiTriangleDuotone } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

import useMediaQuery from "../hooks/useMediaQuery";

function Navbar(): JSX.Element | null {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [navOnTop, setNavOnTop] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  const navbarBg = navOnTop ? "bg-transparent" : "bg-stone-50 border-b-2";

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setNavOnTop(true) : setNavOnTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMobileNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav>
      <div
        className={`fixed top-0 w-full h-16 flex items-center 
        px-10 z-10 transtion-all duration-300 ${navbarBg}`}
        ref={ref}
      >
        <PiTriangleDuotone className="text-2xl" />

        {isDesktop ? (
          <div className="flex gap-5 font-bold text-lg ps-5">
            <p>Project</p>
            <p>Technologies</p>
            <p>Contact</p>
          </div>
        ) : (
          <div className="ml-auto">
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <RxHamburgerMenu className="text-lg" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {!isDesktop && mobileNavOpen && (
          <motion.div
            className="fixed top-0 w-[50vw] h-[100vh] z-20
          bg-stone-50 drop-shadow-lg ps-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pe-10 flex pt-5 pb-10 justify-between items-center">
              <PiTriangleDuotone className="text-2xl" />
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              <p>Project</p>
              <p>Technologies</p>
              <p>Contact</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
