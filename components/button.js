import Link from 'next/link'

export default function Button(props) {
    return (
        <button className="border-2 border-black p-4 rounded-3xl w-40 bg-white
        hover:bg-merida-green hover:drop-shadow-xl
        transition-colors duration-200 text-xl" >
            <Link href={props.link}>
                {props.text}
            </Link>
        </button >
    )
}