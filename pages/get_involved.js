import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/GetInvolved.module.css";

// Data
import { get_involved } from "../data/getting_involved_data";

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
    <Layout title="Get Involved">
      <h1 className="text-center text-5xl pt-12">Get Involved</h1>

      {/* Loop through each item */}
      {data.map((item) => (
        <div className="px-4 mt-12 sm:max-w-3xl sm:m-auto md:flex md:max-w-5xl sm:mt-12">
          {/* Image */}
          <div className="md:w-2/6">
            <Image
              src={`/img/getting_involved/${item.image}`}
              height="250"
              width="250"
            />
          </div>

          {/* Content */}
          <div className="md:w-4/6">
            <h2 className="text-3xl">{item.name}</h2>
            <p className="text-2xl mt-4">{item.description}</p>

            {/* Loop through buttons (if more than 1) */}
            {item.buttons.map((button) => (
              <>
                <div className={`${styles.button} mt-4 text-center w-44`}>
                  <Link href= {button.path}>{button.name}</Link>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
