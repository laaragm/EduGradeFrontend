import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/modules/shared/services";
import { BaseLayout } from "@/modules/generics/components";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </QueryClientProvider>
        </>
    );
}
