import Lottie from "lottie-react";

import IAmText from "./IAmText";
import LottieGif from "../lotties/codingGirlGif.json";

function Hi(): JSX.Element {
  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-between
      mt-[5rem] md:mt-[7rem]"
    >
      <div className="order-2 lg:order-1 lg:text-start xl:ps-[10%]">
        <h1
          className="text-center mt-6 lg:mt-[3rem] 2xl:mt-[5rem] 
          lg:text-start text-4xl lg:text-6xl"
        >
          Hi, my name is
          <span className="font-bold"> Sara.</span>
        </h1>

        <p className="mt-[3rem] text-lg md:text-2xl leading-10">
          I am a self-taught <span className="font-bold">web developer </span>
          with an <span className="font-bold">MBA</span> degree.
        </p>
        <IAmText />
      </div>
      <div className="order-1 lg:order-2 xl:pe-[10rem]">
        <Lottie
          animationData={LottieGif}
          height={50}
          width={50}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}

export default Hi;
