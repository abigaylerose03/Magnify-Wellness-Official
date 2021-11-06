import Image from "next/image";
import Link from "next/link";
import styles from "../styles/GetInvolved.module.css";

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
    <Layout title="Get Involved">
      <h1 className="text-center text-5xl">Get Involved</h1>

      {data.map((item) => (
        <div className="px-4 mt-12 sm:max-w-3xl sm:m-auto md:flex md:max-w-5xl sm:mt-12">
          {/* Image */}
          <div className="md:w-2/6">
            <Image
              src={`/img/getting_involved/${item.Image}`}
              height="250"
              width="250"
            />
          </div>

          {/* Content */}
          <div className="md:w-4/6">
            <h2 className="text-3xl">{item.Name}</h2>
            <p className="text-2xl mt-4">{item.Description}</p>

            {item.Buttons.map((button) => (
              <>
                <div className={`${styles.button} mt-4 text-center w-44`}>
                  <Link href="/">{button.Name}</Link>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
