//todo change bg color

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiTriangleDuotone } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, animateScroll } from "react-scroll";

import useMediaQuery from "../hooks/useMediaQuery";

function Navbar(): JSX.Element | null {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [navOnTop, setNavOnTop] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  const navbarBg = navOnTop ? "bg-transparent" : "bg-stone-50 border-b-2";
  const navLinks = [
    { label: "Projects" },
    { label: "Technologies" },
    { label: "Contact" },
  ];

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
        <PiTriangleDuotone
          className="text-2xl cursor-pointer"
          onClick={() =>
            animateScroll.scrollToTop({ duration: 500, smooth: true })
          }
        />

        <div className={`flex gap-5 text-lg ${isDesktop ? "ps-5" : "ml-auto"}`}>
          {isDesktop ? (
            navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.label.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                offset={-100}
              >
                {link.label}
              </Link>
            ))
          ) : (
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <RxHamburgerMenu className="text-lg" />
            </button>
          )}
        </div>
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
              <PiTriangleDuotone
                className="text-2xl cursor-pointer"
                onClick={() =>
                  animateScroll.scrollToTop({ duration: 500, smooth: true })
                }
              />
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.label.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  offset={-100}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
