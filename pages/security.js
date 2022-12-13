import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';

const localization = {
    securityHeaderTitle: {
        tr: "ResManSys: Güvenlik", en: "ResManSys: Security", de: "ResManSys: Sicherheit"
    }
}

export default function Security() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{localization.securityHeaderTitle.en}</title>
            </Head>
            <MainLayout
                child={
                    <></>
                }
            />
        </>
    )
}
