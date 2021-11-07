import Layout from "../../components/layout";
import { art } from "../../data/team_data/departments/art";
import { community } from "../../data/team_data/departments/community_engagement";
import { events } from "../../data/team_data/departments/events";
import { finance } from "../../data/team_data/departments/finance";
import { logistics } from "../../data/team_data/departments/logistics";
import { marketing } from "../../data/team_data/departments/marketing";
import { mental } from "../../data/team_data/departments/mental_health_changemakers";
import { mentorship } from "../../data/team_data/departments/mentorship";
import { partnership } from "../../data/team_data/departments/partnerships";
import { research } from "../../data/team_data/departments/research_and_development";
import { social } from "../../data/team_data/departments/social_media";
import { tech } from "../../data/team_data/departments/tech";
import { writing } from "../../data/team_data/departments/writing";

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
    // TODO: Hacky way of doing this, I was trying to dynamically import the folders. Figure out how to do this cleanly
  const val = params.department.split("_")[0]
  var object = "";

  switch (val) {
    case "art":
      object = art;
      break;
    case "community":
      object = community;
      break;
    case "events":
      object = events;
      break;
    case "finance":
      object = finance;
      break;
    case "logistics":
      object = logistics;
      break;
    case "marketing":
      object = marketing;
      break;
    case "mental":
      object = mental;
      break;
    case "mentorship":
      object = mentorship;
      break;
    case "partnerships":
      object = partnerships;
      break;
    case "research":
      object = research;
      break;
    case "social":
      object = social;
      break;
    case "tech":
      object = tech;
      break;
    case "writing":
      object = writing;
      break;
  }

  console.log(object);

  return {
    props: {
      data: object,
    },
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
