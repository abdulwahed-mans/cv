import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4">
          You can reach me at: abdulwahed.mansour@gmail.com
        </p>
      </div>
      // home page link
      <div className="p-8">
        <Link href="/">
          <h2 className="text-blue-600">Go back to home</h2>
        </Link>
      </div>
    </>
  );
}
