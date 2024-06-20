"use client";

import D from "@/components/D";
import E from "@/components/E";
import Link from "next/link";
import { useState } from "react";

export default function NormalPage() {
  const [state, setState] = useState(false);
  return (
    <div className="m-10 p-5 bg-red-200">
      <div className=" text-center">
        <p>This is Page component</p>
      </div>
      <div className="flex justify-center">
        <D state={state} />
        <E setState={setState} />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Link href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja&pli=1">
          <p className=" text-blue-800 underline">
            React Developer
            Toolsでレンダリングを可視化して、前のページとの違いを確認してみてください。
          </p>
        </Link>
        <Link
          href="/"
          className="bg-slate-300 w-[70px] h-[40px] rounded-md hover:bg-slate-400 flex items-center justify-center"
        >
          戻る
        </Link>
      </div>
    </div>
  );
}
