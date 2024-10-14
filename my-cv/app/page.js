// Example in app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to my CV page!
      </h1>
      <Link href="/contact">
        <h1 className="text-3xl font-bold text-red-600">contact</h1>
      </Link>
    </div>
  );
}

//return <Link href="/dashboard">Dashboard</Link>
