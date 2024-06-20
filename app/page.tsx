"use client";

import B from "@/components/B";
import C from "@/components/C";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const stateRef = useRef<(state: boolean) => void>(() => void 0);
  useEffect(() => {
    console.log("page rendered!");
  });
  return (
    <div className="m-10 p-5 bg-red-200">
      <div className=" text-center">
        <p>This is Page component</p>
      </div>
      <div className="flex justify-center">
        <B stateRef={stateRef} />
        <C stateRef={stateRef} />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Link href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja&pli=1">
          <p className=" text-blue-800 underline">
            React Developer
            Toolsでレンダリングを可視化して、次のページとの違いを確認してみてください。
          </p>
        </Link>
        <Link
          href="/normal"
          className="bg-slate-300 p-2 w-[100px] h-[40px] rounded-md hover:bg-slate-400 flex items-center justify-center"
        >
          次のページ
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          href="https://github.com/kaitobq/ABC"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-800 underline"
        >
          ソースコード→
        </Link>
      </div>
    </div>
  );
}
