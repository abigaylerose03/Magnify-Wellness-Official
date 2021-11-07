import Layout from "../../components/layout";

export async function getStaticPaths() {
  return {
    // Allow these paths to be called at build
    paths: [
      { params: { department: "art" } },
      { params: { department: "community_engagement" } },
      { params: { department: "events" } },
      { params: { department: "finance" } },
      { params: { department: "logistics" } },
      { params: { department: "marketing" } },
      { params: { department: "mental_health_changemakers" } },
      { params: { department: "mentorship" } },
      { params: { department: "partnerships" } },
      { params: { department: "research_and_development" } },
      { params: { department: "social_media" } },
      { params: { department: "tech" } },
      { params: { department: "writing" } },
    ],

    // Any other path will return 404 not found (since that department wouldn't exist other than the ones above)
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
//   const data = await fetch(`../../data/team_data/departments/${params.department}.js`);
  const data = `../../data/team_data/departments/${params.department}.js`
//   const data = await res.json();

console.log(data);

  return {
    props: { data },
    // Re-generate the data at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default function Department({ data }) {

  return (
    <Layout title="App">
      {data.map((section) => (
          <div>{section.departmentName}</div>
      ))}
    </Layout>
  );
}
