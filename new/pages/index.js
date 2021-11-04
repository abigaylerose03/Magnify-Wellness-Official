import Head from "next/head";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />

      <main className="h-96 bg-red-200"></main>

      <Footer />
    </div>
  );
}
