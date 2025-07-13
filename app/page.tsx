import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Link from "next/link";

import { defineQuery } from "next-sanity";
import { sanityFetch } from "./lib/live";

const PROJECTS_QUERY = defineQuery(`
*[_type=='project'] | order(date desc) {
  title,
  subtitle,
  "featured":coverImage.asset._ref,
  "currentSlug":slug.current,
  date,  
  "currentService": services[]->title,
   "currentTeam": teams[]->{
    "fullName": firstName + " " + lastName
  },   
 _id
}
`);

export default async function Home() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <div>
      <main className={styles.main}>
        {projects.map((project) => (
          <Link
            className={styles.card}
            key={project._id}
            href={`/portfolio/${project?.currentSlug}`}
          >
            <h2 className={styles.title}>{project.title}</h2>
            {project.subtitle && (
              <h2 className={styles.title}>{project.subtitle}</h2>
            )}
            {project.date && (
              <p>
                {new Date(project.date).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
            {project.currentService?.length > 0 && (
              <div>
   
       
                  {project.currentService.map((service, index) => (
                    <div 
                      key={index}
                      className={styles.tag}
                    >
                      {service}
                    </div>
                  ))}
       
              </div>
            )}
            {project.currentTeam?.length > 0 && (
              <div>
                <p className="font-semibold">Team:</p>
                <div className="flex gap-2 flex-wrap">
                  {project.currentTeam.map((member, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 px-2 py-1 rounded text-sm"
                    >
                      {member.fullName}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Link>
        ))}
      </main>

      <Footer />
    </div>
  );
}
