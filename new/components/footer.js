import styles from "../styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t p-12 md:flex md:justify-center">
      <div className="md:w-64 pt-12 lg:w-96">
        <p>Magnify Wellness Logo</p>
        <p className="hidden md:block md:mt-44 md:text-xs">
          &copy; 2021 Magnify Wellness. All rights reserved.
        </p>
      </div>

      <div className={styles.footer_right}>
        {/* Resources */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Resources</p>
          <Link href="/">
            <p className={styles.footer_item}>App</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Donate</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Buy Merch</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Blog</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Get Involved</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Our Partners</p>
          </Link>
          <br />
        </div>

        {/* Company */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Company</p>
          <Link href="/">
            <p className={styles.footer_item}>About</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Privacy policy</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Terms of service</p>
          </Link>
          <br />
        </div>

        {/* Contact */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Contact</p>
          <Link href="/">
            <p className={styles.footer_item}>Contact Us</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Join the Team</p>
          </Link>
          <br />
        </div>

        {/* Social */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Social</p>
          <div className="flex md:block">
            <p className={styles.footer_social_item}>F</p>
            <p className={styles.footer_social_item}>T</p>
            <p className={styles.footer_social_item}>L</p>
            <p className={styles.footer_social_item}>I</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
