import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className={`${styles.bg_primary} p-12 md:flex md:justify-center`}>
      <div className="md:w-64 pt-12 lg:w-96">
        {/* Logo */}
        <div className="flex pt-1">
          <Image src="/img/logo.png" height="40" width="40" />
          <p className="mt-1 font-bold text-lg">Magnify Wellness</p>
        </div>

        <p className="hidden md:block md:mt-44 md:text-xs">
          &copy; 2021 Magnify Wellness. All rights reserved.
        </p>
      </div>

      <div className={styles.footer_right}>
        {/* Resources */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Resources</p>
          <Link href="app.js">
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
          <Link href="blog.js">
            <p className={styles.footer_item}>Blog</p>
          </Link>
          <br />
          <Link href="get_involved.js">
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
          <Link href="contact.js">
            <p className={styles.footer_item}>Contact Us</p>
          </Link>
          <br />
          <Link href="team.js">
            <p className={styles.footer_item}>Join the Team</p>
          </Link>
          <br />
        </div>

        {/* Social */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Social</p>
          <div className="flex md:block">
            {/* Facebook */}
            <div className={styles.footer_social_item}>
              <Link href="">
                <Image src="/icon/facebook.png" height="25" width="25"></Image>
              </Link>
            </div>

            {/* Twitter */}
            <div className={styles.footer_social_item}>
              <Link href="">
                <Image src="/icon/twitter.png" height="25" width="25"></Image>
              </Link>
            </div>

            {/* LinkedIn */}
            <div className={styles.footer_social_item}>
              <Link href="">
                <Image src="/icon/linkedin.png" height="25" width="25"></Image>
              </Link>
            </div>

            {/* Instagram */}
            <div className={styles.footer_social_item}>
              <Link href="">
                <Image src="/icon/instagram.png" height="25" width="25"></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
