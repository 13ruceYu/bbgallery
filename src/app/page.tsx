import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({ orderBy: (model, { desc }) => desc(model.id) });
  return (
    <main className="flex flex-wrap gap-4 px-4">
      {[...images, ...images, ...images].map(({ url, name }, index) => (
        <div key={index} className="w-48">
          <img src={url} />
          <div>{name}</div>
        </div>
      ))}
    </main>
  );
}
