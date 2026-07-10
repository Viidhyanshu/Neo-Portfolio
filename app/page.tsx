import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans transition-colors duration-200">
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center p-4">
        <main className="flex flex-col w-full max-w-3xl flex-col items-center justify-between py-16 px-8 md:py-24 md:px-16 bg-white dark:bg-zinc-900 border-4 border-black text-black dark:text-white shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#facc15] sm:items-start transition-colors duration-200">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-12">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.tsx file.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50 underline"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50 underline"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full sm:w-auto">
            <a
              className="flex h-12 items-center justify-center gap-2 border-2 border-black bg-black text-white dark:bg-white dark:text-black px-6 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert invert-[1] dark:invert-[0]"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 items-center justify-center border-2 border-black bg-white text-black dark:bg-zinc-800 dark:text-white px-6 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_#facc15] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#facc15] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
