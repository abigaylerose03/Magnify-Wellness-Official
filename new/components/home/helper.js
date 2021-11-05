import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Feature within About Section
function Feature({ image_path, feature_name, feature_desc }) {
  return (
    <div className={styles.feature}>
      <Image src={image_path} height="70" width="70" />
      <h2 className={styles.feature_header}>{feature_name}</h2>
      <p className={styles.feature_desc}>{feature_desc}</p>
    </div>
  );
}

// Press Card
function Press({ image_path, press_name, article_link, hei, wid }) {
  return (
    <div className={styles.press}>
      <Image src={image_path} height={hei} width={wid} />
      <h2 className="mt-4 font-medium text-lg px-5 absolute top-32">
        {press_name}
      </h2>

      <Link href={article_link}>
        <div className={styles.press_button}>Go to article</div>
      </Link>
    </div>
  );
}

// Blog Card
function Blog({ image_path, press_name, article_link, hei, wid }) {
  return (
    <div className={styles.press}>
      <Image src={image_path} height={hei} width={wid} />
      <h2 className="mt-4 font-medium text-lg px-5 absolute top-36 left-0 right-0 m-auto">
        {press_name}
      </h2>

      <Link href={article_link}>
        <div className={styles.press_button}>Go to article</div>
      </Link>
    </div>

  );
}

// Metric
function Metric({ num, sign, action }) {
  return (
    <div className={styles.metric}>
      <div className = "text-center align-middle mt-10">
        <div className="flex justify-center">
          <p className="font-extrabold text-3xl">{num}</p>
          <p className="font-extrabold text-3xl">{sign}</p>
          <br />
        </div>
        <p className="text-3xl">{action}</p>
      </div>
    </div>
  );
}

export { Feature, Press, Blog, Metric };
