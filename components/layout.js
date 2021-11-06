import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

function Layout({children, title}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main className = "py-12">
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
