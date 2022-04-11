import Head from "next/head";
import Image from "next/image";
import cover from "../public/images/medida-bike.jpg"
import Button from '../components/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boneshaker</title>
      </Head>
      <div className="bg-merida-green p-5 rounded-md shadow-2xl max-w-6xl">
        <div className="flex flex-row space-x-10">
          <div className="basis-1/2 flex flex-col justify-evenly">
            <h1 className="text-5xl">Boneshaker - Magazin de biciclete</h1>
            <div class="w-full border-t border-black border-2"></div>
            <p className="text-2xl">O gama larga de biciclete, piese de schimb si echipament</p>
            <Button className="bg-white"
              text="Vezi oferta!"
              link='/biciclete'
            />
          </div>
          <div className="basis-1/2">
            <Image className="z-index rounded-md"
              src={cover}
            />
          </div>
        </div>
      </div>
    </>
  );
}
