"use client";

export default function Error({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
