import get_involved from "../utils/getting_involved_data";

export default function GettingInvolved() {
  return (
    <div>
      <Head>
        <title>Get Involved</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <main>
        {get_involved.map((item) => (
          <>
            {item.Name}
          </>
        ))}
      </main>
      <Footer />
    </div>
  );
}
