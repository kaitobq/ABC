import { useEffect, useState } from "react";

interface Props {
  stateRef: React.MutableRefObject<(state: boolean) => void>;
}

export default function B({ stateRef }: Props) {
  const [state, setState] = useState(false);
  stateRef.current = setState;
  useEffect(() => {
    console.log("B rendered!");
  });

  return (
    <div className="bg-blue-200 p-5">
      <p>{state ? "Hello" : "Bye"}</p>
      <p>This is B component</p>
    </div>
  );
}
