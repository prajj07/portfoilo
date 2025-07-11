// import Image from "next/image";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Portfolio />
       </main>
    </div>
  );
}
