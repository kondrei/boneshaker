import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang="ro" className="bg-background-color text-text-color">
            <Head>
                <meta name="description" content="Boneshaker - magazin de biciclete" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Roboto:wght@100;500;900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}