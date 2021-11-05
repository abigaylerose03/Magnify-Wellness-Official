import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Carousel from "../components/home/carousel";
import { Feature, Press, Blog, Metric } from "../components/home/helper";
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
          <div id={styles.home_content}>
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
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-36">
          {/* Target Image */}
          <div className="absolute top-6 h-24 w-24 md:h-32 md:w-32 lg:h-44 lg:w-44">
            <Image id="target" src="/img/home/top-target.png" layout="fill" />
          </div>

          {/* Maggie Image */}
          <div className="absolute right-0 top-16 hidden md:block">
            <Image
              id="target"
              src="/img/home/tilt-logo.png"
              alt=""
              loading="lazy"
              height="150"
              width="150"
            />
          </div>

          {/* Blog Image */}
          <div className="absolute right-0 top-96 sm:top-80 md:top-72 h-24 w-36 md:h-32 md:w-52 lg:h-44 lg:w-80">
            <Image id="target" src="/img/home/blob.png" layout="fill" />
          </div>

          <h1 className={styles.home_header}>Our Mission</h1>
          <h2 className="text-3xl text-center mt-12 px-4 font-semibold sm:max-w-2xl sm:m-auto sm:mt-12">
            Our mission is to ensure that everyone gains equal access to mental
            health support through outreach programs and technology.
          </h2>
        </section>

        {/* About */}
        <section className={`${styles.bg_primary} relative py-36 `}>
          <h1 className={styles.home_header}>Our Award-Winning App</h1>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 max-w-sm md:max-w-3xl m-auto mt-24 gap-4">
            {/* Chatbot feature */}
            <Feature
              image_path="/img/home/about/talk.svg"
              feature_name="Chatbot"
              feature_desc="Talk one-on-one with our chatbot, Maggie"
            />

            {/* Breathe feature */}
            <Feature
              image_path="/img/home/about/breathe.svg"
              feature_name="Breathe"
              feature_desc="Take time to relax with a guided breathing exercise"
            />

            {/* Connect feature */}
            <Feature
              image_path="/img/home/about/people.svg"
              feature_name="Connect"
              feature_desc="Connect with and speak to a counselor"
            />

            {/* Play Feature */}
            <Feature
              image_path="/img/home/about/game.svg"
              feature_name="Play"
              feature_desc="De-stress with Maggie’s Adventure Game"
            />

            {/* Write Feature */}
            <Feature
              image_path="/img/home/about/book.svg"
              feature_name="Write"
              feature_desc="Create journal entries using guided prompts"
            />

            {/* Check In Feature */}
            <Feature
              image_path="/img/home/about/feelings.svg"
              feature_name="Check-in"
              feature_desc="Check-in with your feelings and emotion"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <Carousel />
        </section>

        {/* Get Involved */}
        <section
          className={`${styles.bg_secondary} relative text-center py-12`}
        >
          <h1 className="text-white font-bold text-5xl px-4 max-w-2xl md:max-w-5xl m-auto">
            More than just an app...Join the Magnify Movement!
          </h1>
          <div className={`${styles.button} mt-12`}>
            <Link href="/">Get Involved</Link>
          </div>
        </section>

        {/* Press */}
        <section className={`${styles.bg_primary} relative py-36`}>
          <h1 className={styles.home_header}>Press</h1>
          <div className="md:flex md:max-w-4xl md:m-auto">
            <Press
              image_path="/img/home/press/brain.png"
              press_name="STEAMChangers: Abigayle Peterson"
              article_link=""
              hei="110"
              wid="110"
            />

            <Press
              image_path="/img/home/press/stem_lights.png"
              press_name="Mental Health during the Pandemic: STEM spotlight"
              article_link=""
              hei="70"
              wid="200"
            />

            <Press
              image_path="/img/home/press/channel_kindness.png"
              press_name="Magnifying the Importance of Mental Health"
              article_link=""
              hei="80"
              wid="80"
            />
          </div>
        </section>

        {/* Metric */}
        <section className={styles.impact}>
          <div className={styles.custom_shape_top}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={styles.custom_shape_top_svg}
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.shape_fill}
              ></path>
            </svg>
          </div>

          <div className={styles.custom_shape_bottom}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={styles.custom_shape_bottom_svg}
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shape_fill}
              ></path>
            </svg>
          </div>

          <div className={styles.metrics_container}>
            <Metric num="1000" sign="+" action="users" />
            <Metric num="54" sign="k+" action="youth impacted" />
            <Metric num="100" sign="+" action="active leaders" />
            <Metric num="10" sign="+" action="countries reached" />
          </div>
        </section>

        {/* Blog */}
        <section className={`${styles.bg_primary} relative py-36`}>
          <h1 className={styles.home_header}>Blog</h1>
          <div className="md:flex md:max-w-xl md:m-auto">
            <Blog
              image_path="/img/home/press/meet-the-writers.png"
              press_name="Meet the Writers"
              article_link=""
              hei="130"
              wid="130"
            />

            <Blog
              image_path="/img/home/press/spotlight.png"
              press_name="Spotlight on Magnify's Founder: Abigayle Peterson"
              article_link=""
              hei="120"
              wid="120"
            />
          </div>
        </section>

        {/* Join Newsletter */}
        <section className={`${styles.bg_secondary} relative text-center py-6`}>
          <div>
            <div className="text-2xl">🔎 Subscribe to our newsletter</div>
            <form
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSe47un1ai3dJ3y1F_mAsJQQYOC1FBYaGGZGt6hNb7EL_kozaw/formResponse"
              method="post"
              target="_blank"
              className="mt-4"
            >
              <input
                autoComplete="email"
                name="email"
                placeholder="Email"
                type="email"
                className="rounded p-1 w-80 sm:w-96 mr-2"
              />
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
