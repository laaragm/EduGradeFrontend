import Head from "next/head";
import { useRouter } from "next/router";

import { TeachersView } from "@/modules/teachers/views";
import { LoadingScreen } from "@/modules/shared/components";

export default function Teachers() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EduGrade</title>
                <meta name="description" content="Gerenciamento de professores" />
            </Head>
            {router.isReady ? <TeachersView /> : <LoadingScreen fullPageCentralized />}
        </>
    );
}
