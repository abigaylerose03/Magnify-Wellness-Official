import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function App() {
  return (
    <div>
      <Head>
        <title>App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main></main>
      <Footer />
    </div>
  );
}
