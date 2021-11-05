import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Magnify Wellness</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />

      <main>
        {/* Home */}
        <section id={styles.home}>
          {/* Left Portion */}
          <div className="text-center px-12 pt-12 md:text-left">
            <Image src="/img/home/maggie.png" width="180" height="300" />
            <h2 className="mt-4 text-4xl text-white">Magnify Wellness</h2>
            <h1 className="mt-4 text-5xl uppercase text-gray-100">
              Your Mental Health Hub
            </h1>
            <p className="mt-10 text-white text-xl font-bold">
              Welcome to Magnify Wellness, a completely free app dedicated to
              helping improve your mental health.
            </p>
            <div className="flex justify-center md:justify-start mt-12">
              <Link href="https://apps.apple.com/in/app/magnify-wellness/id1526188573">
                <div className="mr-2">
                  <Image
                    src="/icon/apple_store_icon.png"
                    width="150"
                    height="50"
                  />
                </div>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=org.reactjs.native.example.Magnify&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <div className="ml-2">
                  <Image
                    src="/icon/google_play_icon.png"
                    width="150"
                    height="50"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Portion */}
          <div className="text-center px-12 pb-12">
            <div className="hidden md:block md:mt-36">
              <Image src="/img/home/phones.png" width="300" height="300" />
            </div>
            <h2 className="mt-12 text-3xl text-white">
              Magnify 2.0 is available for Android and iOS!
            </h2>
          </div>
        </section>

        {/* Mission */}
        <section></section>

        {/* About */}
        <section></section>

        {/* Press */}
        <section></section>

        {/* Blog */}
        <section></section>
      </main>

      <Footer />
    </div>
  );
}
