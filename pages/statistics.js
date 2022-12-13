import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';

const localization = {
    statisticsHeaderTitle: {
        tr: "ResManSys: İstatistikler", en: "ResManSys: Statistics", de: "ResManSys: Statistiken"
    }
}

export default function Security() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{localization.statisticsHeaderTitle.en}</title>
            </Head>
            <MainLayout
                child={
                    <></>
                }
            />
        </>
    )
}
