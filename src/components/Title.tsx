type Props = { text: string };

function Title({ text }: Props) {
  return (
    <div
      className="mt-[6rem] mb-[2rem] text-3xl
      lg:text-4xl font-bold text-center"
    >
      {text}
    </div>
  );
}

export default Title;
