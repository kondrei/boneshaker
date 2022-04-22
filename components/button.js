import Link from "next/link";

export default function Button({ link = "", text, handleClick }) {
  return (
    <button
      className="flex text-black bg-merida-green border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-merida-green rounded text-lg
        transition-colors duration-200 text-xl
        lg:px-8"
      onClick={handleClick}
    >
      {link !== "" ? <Link href={link}>{text}</Link> : text}
    </button>
  );
}
