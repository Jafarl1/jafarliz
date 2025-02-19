import Typewriter from "typewriter-effect";

type TypingTextProps = {
  texts: string[];
};

export default function TypingText({ texts }: TypingTextProps) {
  return (
    <Typewriter
      options={{
        strings: texts,
        autoStart: true,
        loop: true,
        delay: 36,
        deleteSpeed: 30,
      }}
    />
  );
}
