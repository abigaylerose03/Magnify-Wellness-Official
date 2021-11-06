import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Press() {
  return (
    <div>
      <Head>
        <title>Press</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main></main>
      <Footer />
    </div>
  );
}
