import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';

const localization = {
    devicesHeaderTitle: {
        tr: "ResManSys: Cihazlar", en: "ResManSys: Devices", de: "ResManSys: Geräte"
    }
}

export default function Security() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{localization.devicesHeaderTitle.en}</title>
            </Head>
            <MainLayout
                child={
                    <></>
                }
            />
        </>
    )
}
