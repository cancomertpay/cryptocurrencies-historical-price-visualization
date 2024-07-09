import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-10">
      <p className="w-full font-bold font-mono text-3xl text-white/80 text-center">
        {" "}
        404 - Page not found :/
      </p>
      <p className="w-full font-bold text-2xl text-white/80 text-center underline hover:text-white/10 transition-colors duration-300">
        <Link href={"/"}>Go Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
