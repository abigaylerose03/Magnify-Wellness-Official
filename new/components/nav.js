import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/Image";

function Nav() {
  return (
    <header className={styles.header}>
      <nav className="flex pt-2 pb-4">
        {/* Logo */}
        <div className="flex ml-6 pt-1">
          <Image src="/img/logo.png" height="40" width="40" />
          <p className="mt-1 font-bold text-lg">Magnify Wellness</p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <ul className="flex">
            <p href="/" className={styles.top_item}>
              <Link href="/">App</Link>
            </p>

            <p href="/" className={styles.top_item}>
              <Link href="/">Get Involved</Link>
            </p>

            {/* News Dropdown */}
            <div className={styles.dropdown}>
              <button>News</button>
              <div className={styles.dropdown_content}>
                <p>
                  <Link href="/">Events</Link>
                </p>
                <p>
                  <Link href="/">Blog</Link>
                </p>
                <p>
                  <Link href="/">Press</Link>
                </p>
              </div>
            </div>
            {/* End of News Dropdown */}

            {/* Company Dropdown */}
            <div className={styles.dropdown}>
              <button>Company</button>
              <div className={styles.dropdown_content}>
                <p>
                  <Link href="/">Team</Link>
                </p>
                <p>
                  <Link href="/">Careers</Link>
                </p>
                <p>
                  <Link href="/">Buy our Merch</Link>
                </p>
              </div>
            </div>
            {/* End of Company Dropdown */}

            <p className={styles.top_item}>
              <Link href="/">Contact</Link>
            </p>

            <p className="bg-white p-1 rounded ml-2 hover:cursor-pointer hover:bg-gray-100">
              <Link href="/">
                <p className="font-bold">Donate</p>
              </Link>
            </p>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
