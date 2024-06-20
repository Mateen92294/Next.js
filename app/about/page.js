import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-9xl">About Page</h1>
      <Link href="/" className="text-2xl">
        Home page
      </Link>
    </div>
  );
};

export default AboutPage;
