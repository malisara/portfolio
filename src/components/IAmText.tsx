import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const iAmAlso = [
  "a nature lover",
  "a fun fact nerd",
  "a jet lag enthusiast",
  "a bookworm",
  "an odd languages fan",
  "a mountain goat",
  "a culinary risk-taker",
];

function IAmText(): JSX.Element {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % iAmAlso.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-5 text-lg md:text-2xl">
      I am also {""}
      <ReactTextTransition springConfig={presets.gentle} inline>
        {iAmAlso[textIndex]}
      </ReactTextTransition>
    </div>
  );
}

export default IAmText;
