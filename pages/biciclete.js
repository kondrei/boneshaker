import Head from "next/head";
import Produse from "../components/produse";
import produse from './data/produse.json'

export default function Biciclete(products) {
  return (
    <>
      <Head>
        <title>Boneshaker - Biciclete</title>
      </Head>

      <h1 className="flex justify-center">Biciclete</h1>
      <Produse produse={products} />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(produse)
  const products = await data.json();
  return {
    props: {
      products,
    },
  }
}