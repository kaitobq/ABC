import { useEffect } from "react";

interface Props {
  state: boolean;
}

export default function D({ state }: Props) {
  useEffect(() => {
    console.log("B rendered!");
  });

  return (
    <div className="bg-blue-200 p-5">
      <p>{state ? "Hello" : "Bye"}</p>
      <p>This is a D component</p>
    </div>
  );
}
