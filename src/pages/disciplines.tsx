import Head from "next/head";
import { useRouter } from "next/router";

import { DisciplinesView } from "@/modules/subjects/views";
import { LoadingScreen } from "@/modules/shared/components";

export default function Disciplines() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EduGrade</title>
                <meta name="description" content="Gerenciamento de disciplinas" />
            </Head>
            {router.isReady ? <DisciplinesView /> : <LoadingScreen fullPageCentralized />}
        </>
    );
}
