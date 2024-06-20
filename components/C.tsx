import { useEffect } from "react";

interface Props {
  stateRef: React.MutableRefObject<(state: boolean) => void>;
}

export default function C({ stateRef }: Props) {
  useEffect(() => {
    console.log("C rendered!");
  });

  return (
    <div className="m-3 p-5 bg-green-300">
      <p>This is C component</p>
      <p className="font-bold text-center">Press the Button!!</p>
      <button
        onClick={() => stateRef.current(true)}
        className="bg-slate-300 rounded-md w-[70px] h-[40px] m-2 hover:bg-slate-400"
      >
        Hello
      </button>
      <button
        onClick={() => {
          stateRef.current(false);
        }}
        className="bg-slate-300 rounded-md w-[70px] h-[40px] hover:bg-slate-400"
      >
        Bye
      </button>
    </div>
  );
}
