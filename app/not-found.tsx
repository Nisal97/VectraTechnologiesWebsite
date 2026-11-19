import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#090d16] text-white">
      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 rounded-full mb-6">
        404 // ROUTE_NOT_FOUND
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        The endpoint or page you requested does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition"
      >
        Return to Homepage
      </Link>
    </main>
  );
}