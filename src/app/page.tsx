import { db } from "~/server/db";
import { SignedIn, SignedOut } from '@clerk/nextjs';

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({ orderBy: (model, { desc }) => desc(model.id) });
  return (
    <div className="flex flex-wrap gap-4 px-4">
      {[...images, ...images, ...images].map(({ url, name }, index) => (
        <div key={index} className="w-48">
          <img src={url} />
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex flex-wrap gap-4 px-4">
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <div>Sign in to view images</div>
      </SignedOut>
    </main>
  );
}
