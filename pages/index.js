import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';

const localization = {
  homeHeaderTitle: { tr: "ResManSys: Anasayfa", en: "ResManSys: Dashboard", de: "ResManSys: Startseite" },
}

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{localization.homeHeaderTitle.en}</title>
      </Head>
      <MainLayout
        child={
          <></>
        }
      />
    </>
  )
}
