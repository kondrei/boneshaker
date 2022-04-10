import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang="ro" className="bg-background-color text-white">
            <Head>
                <meta name="description" content="Boneshaker - magazin de biciclete" />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}