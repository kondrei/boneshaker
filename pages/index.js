import Head from "next/head";
import Image from "next/image";
import cover from "../public/images/medida-bike.jpg";
import Button from "../components/button";
import Slider from "../components/slider";

export default function Home() {

  return (
    <>
      <Head>
        <title>Boneshaker</title>
      </Head>
      <Slider />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Vezi ultimul model <br className="hidden lg:inline-block" />
              NINETY-SIX
            </h1>
            <p className="mb-8 leading-relaxed">
              Cea mai recentă versiune a treia, încărcată cu funcții, a
              modelului NINETY-SIX moștenește genele de cursă în avans ale
              vechiului NINETY-SIX și o combină cu pregătirea și capacitatea de
              a aborda cursurile solicitante de XC și maraton de astăzi.
              Platforma de cadru extrem de capabilă a modelului NINETY-SIX III
              este baza perfectă pentru o mașină cu suspensie completă plină de
              distracție, rapidă și iubitoare de trasee.
            </p>
            <div className="flex space-x-10">
              <Button text="Comandă!" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={cover} className="shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
