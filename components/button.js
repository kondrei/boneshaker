import Link from "next/link";

export default function Button({ link, text }) {
  return (
    <button
      className="flex mx-auto mt-16 text-black bg-merida-green border-0 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg
        transition-colors duration-200 text-xl"
    >
      <Link href={link}>{text}</Link>
    </button>
  );
}
