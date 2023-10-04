type Props = { link: string };

function BtnGithub({ link }: Props): JSX.Element {
  return (
    <a
      href={link}
      className="border-secondaryColor border rounded-lg px-4 
      py-2 bg-secondaryColor text-white font-bold
      w-fit transtion-all duration-500 opacity-90 hover:opacity-75
      "
      target="_blank"
    >
      Project Code
    </a>
  );
}

export default BtnGithub;
