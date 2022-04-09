import Link from "next/link"

export default function my404() {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col" >
            <p className="text-red-500 text-center text-4xl">nu am gasit nimic</p>
            <Link href="/">
                <a className="block mt-10">Pagina principala</a>
            </Link>
        </div>
    )
}