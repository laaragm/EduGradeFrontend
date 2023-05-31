import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content={
                        "default-src 'self' https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' https: localhost:*;" +
                        "connect-src https: localhost:* ws://localhost:*; style-src 'unsafe-inline' https:; object-src 'none';" +
                        "img-src 'self' blob: data:*;"
                    }
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
