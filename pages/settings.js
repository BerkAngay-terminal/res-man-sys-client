import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';

const localization = {
    settingsHeaderTitle: {
        tr: "ResManSys: Ayarlar", en: "ResManSys: Settings", de: "ResManSys: Einstellungen"
    }
}

export default function Security() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{localization.settingsHeaderTitle.en}</title>
            </Head>
            <MainLayout
                child={
                    <></>
                }
            />
        </>
    )
}
