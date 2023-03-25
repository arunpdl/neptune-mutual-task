import Logo from "@/assets/images/logo_dark.svg";
import ConverterForm from "@/components/ConverterForm";
import Wallet from "@/components/Wallet";
import styles from "@/styles/home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={styles.mainWrapper}
        id="next-app"
        aria-label="Neptune Mutual main page"
      >
        <div className={styles.imgWrapper}>
          <Image
            src={Logo}
            alt="Neptune Mutual company logo"
            width={300}
            height={50}
          />
        </div>
        <ConverterForm />
        <Wallet />
      </main>
    </>
  );
}
