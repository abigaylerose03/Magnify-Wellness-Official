import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Press.module.css";

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
    <Layout title="Press">
      <h1 className="text-center text-5xl">Press</h1>

      {/* Loop through each section */}
      {data.map((section) => (
        <>
          <h2 className="text-3xl mt-12 px-6 max-w-lg m-auto md:max-w-4xl md:px-0">
            {section.title}
          </h2>

          {/* Article Content */}
          <div className = "md:grid md:grid-cols-2 md:max-w-4xl md:gap-4 md:m-auto md:mt-8">
            {section.docs.map((doc) => (
              <div className="px-6 mt-8 max-w-lg m-auto md:max-w-none md:px-0 md:m-0">
                <h4
                  className={`${styles.text_primary} text-2xl mb-2 font-bold`}
                >
                  {doc.pressName}
                </h4>
                <hr className="border-yellow-300 border" />
                <h4 className="text-2xl italic mt-2">{doc.articleName}</h4>
                <p className="text-xl mt-2">{doc.date}</p>
                <div className={`${styles.button} mt-4 text-center w-24`}>
                  <Link href={doc.buttonPath}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </Layout>
  );
}
