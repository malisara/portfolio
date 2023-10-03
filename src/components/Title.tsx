type Props = { text: string };

function Title({ text }: Props): JSX.Element {
  return (
    <div
      className="mt-[6rem] md:mt-[10rem] mb-[2rem] md:mb-[4rem] text-3xl
      lg:text-4xl font-bold text-center"
      id={text.toLowerCase()}
    >
      {text}
    </div>
  );
}

export default Title;
