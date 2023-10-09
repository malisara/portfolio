import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const iAmAlso = [
  "nature lover",
  "fun fact nerd",
  "jet lag enthusiast",
  "bookworm",
  "odd languages fan",
  "mountain goat",
  "culinary risk-taker",
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
      I am also a {""}
      <ReactTextTransition springConfig={presets.gentle} inline>
        {iAmAlso[textIndex]}
      </ReactTextTransition>
    </div>
  );
}

export default IAmText;
