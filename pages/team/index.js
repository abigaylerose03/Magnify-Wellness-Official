import Layout from "../../components/layout";
import Image from "next/image";

import { team } from "../../data/team_data/team_home";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: team,
    },
  };
}

export default function Team({ data }) {
  return (
    <Layout title="Meet the Team">
      <h1 className="text-center text-5xl pt-12">Meet the Team</h1>

      {data.map((section) => (
        <>
          {/* Featured People */}
          {section.person.map((person) => (
            <div className="mt-12 text-center px-4 lg:flex lg:justify-center">
              {/* Image */}
              <div className="lg:mr-6 lg:mt-12">
                <Image
                  src={`/img/team/members/${person.image}`}
                  width="200"
                  height="200"
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <div className="mt-4 md:max-w-xl md:m-auto md:mt-4 lg:m-0 lg:mt-4 lg:max-w-2xl">
                <h1 className="text-4xl">{person.name}</h1>
                <p className="italic text-2xl mt-2">{person.jobTitle}</p>
                <p className="text-lg mt-2">{person.description}</p>
              </div>
            </div>
          ))}

          <h3 className="mt-24 text-5xl text-center">Departments</h3>
          {/* List of Departments */}
          <div className="sm:grid sm:grid-cols-2 sm:max-w-xl sm:m-auto md:grid-cols-3 md:max-w-4xl">
            {section.departments.map((department) => (
              <div className="border-2 border-yellow-200 w-56 h-80 md:w-64 mt-12 m-auto hover:cursor-pointer">
                <a href={`/team/${department.path}`}>
                  <div className="text-center">
                    <Image
                      src={`/img/team/department_images/${department.departmentImage}`}
                      height="200"
                      width="200"
                    />
                  </div>

                  {/* Content */}
                  <div className = "relative h-28">
                    <hr className="border-2" />
                    <p className="text-3xl text-center p-4">
                      {department.departmentName}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      ))}
    </Layout>
  );
}
