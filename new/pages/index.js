import Head from 'next/head';
import Footer from '../components/footer';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      
      <main>
        Test
      </main>

        <Footer />
    </div>
  )
}
