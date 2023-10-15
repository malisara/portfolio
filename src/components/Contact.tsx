import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

import Title from "./Title";

const rowStyle = "flex gap-2 justify-center items-center";

function Contact(): JSX.Element {
  return (
    <>
      <Title text={"Contact"} />
      <div className="mb-[5rem] flex flex-col gap-5 text-xl">
        <div className={rowStyle}>
          <AiOutlineGithub />
          <a
            href="https://github.com/malisara"
            target="_blank"
            className="hover:opacity-70"
          >
            @malisara
          </a>
        </div>

        <div className={rowStyle}>
          <AiOutlineMail />
          <a href="mailto:mali.sara7@gmai.com" className="hover:opacity-70">
            mali.sara7@gmai.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
