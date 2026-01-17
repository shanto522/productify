import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-600">Page not found</p>
      <Link
        href="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
}
