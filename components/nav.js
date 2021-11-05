import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/Image";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick = {() => setIsOpen(!isOpen)} >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          { isOpen && 
            <>
            </>
          }

          <ul className="md:flex hidden">
            <div className={styles.top_item}>
              <Link href="/">App</Link>
            </div>

            <div className={styles.top_item}>
              <Link href="/">Get Involved</Link>
            </div>

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
                <div>
                  <Link href="/">Team</Link>
                </div>
                <div>
                  <Link href="/">Careers</Link>
                </div>
                <div>
                  <Link href="/">Buy our Merch</Link>
                </div>
              </div>
            </div>
            {/* End of Company Dropdown */}

            <div className={styles.top_item}>
              <Link href="/">Contact</Link>
            </div>

            <div className={styles.top_item}>
              <Link href="/">
                <p className="font-bold hover:cursor-pointer">Donate</p>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
