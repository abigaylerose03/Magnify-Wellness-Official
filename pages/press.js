import Layout from "../components/layout";
import Link from "next/link";

import { press } from "../data/press_data";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: press,
    },
  };
}

export default function Press({ data }) {
  return (
    <Layout title = "Press">
      
    </Layout>
  );
}
