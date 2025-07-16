import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
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
  return (
    <>
      <main className={styles.main}>
        Home page
      </main>
    </>
  );
}
