import Head from "next/head";
import { useRouter } from "next/router";

import { HomeView } from "@/modules/generics/views";
import { LoadingScreen } from "@/modules/shared/components";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EduGrade</title>
                <meta
                    name="description"
                    content="Projetado para gerenciar e acompanhar a performance acadêmica no âmbito escolar"
                />
            </Head>
            {router.isReady ? <HomeView /> : <LoadingScreen fullPageCentralized />}
        </>
    );
}
