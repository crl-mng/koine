import { defineQuery } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/app/lib/live";

const PROJECT_QUERY = defineQuery(`
*[_type=='project' && slug.current == $slug][0] {
  title,
  subtitle,
  "featured": coverImage.asset._ref,
  "currentSlug": slug.current,
  date,  
  "currentService": services[]->title,
  "currentTeam": teams[]->{
    "fullName": firstName + " " + lastName
  },
  _id
}
`);

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug: params.slug },
  });

  if (!project) notFound();

  const { title, subtitle, currentService, currentTeam, date } = project;

  return (
    <div className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/portfolio/">← Back to portfolio</Link>
      </div>

      <div className="grid items-top gap-12 sm:grid-cols-2">
        <img
          src="https://placehold.co/550x310/png"
          alt={title || "Progetto"}
          height="310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter mb-8">{title}</h1>

          {subtitle && (
            <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
          )}

          {date && (
            <p className="text-sm">
              Data:{" "}
              {new Date(date).toLocaleDateString("it-IT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {currentService?.length > 0 && (
            <p className="text-sm">Servizi: {currentService.join(", ")}</p>
          )}

          {currentTeam?.length > 0 && (
            <p className="text-sm">
              Team: {currentTeam.map((t) => t.fullName).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
