import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

// Data
import { get_involved } from "../utils/getting_involved_data";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: get_involved,
    },
  };
}

export default function GettingInvolved({ data }) {
  return (
    <div>
      <Head>
        <title>Get Involved</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main>
        {/* {data.map( item => (
            <>
                {item.Name}
            </>
        ))} */}
      </main>
      <Footer />
    </div>
  );
}
