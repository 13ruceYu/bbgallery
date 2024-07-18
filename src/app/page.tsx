import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://dummyimage.com/800x600/000213/d23233',
  'https://dummyimage.com/800x600/100213/a23233',
  'https://dummyimage.com/800x600/200213/b23233',
  'https://dummyimage.com/800x600/300213/c23233',
]

const mockImages = mockUrls.map((url, index) => (
  {
    id: index + 1,
    url,
  }
))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex flex-wrap gap-4 px-4">
      {posts.map(({ id, name }) => (
        <div key={id} className="w-48">
          <p>{name}</p>
        </div>
      ))}
      {[...mockImages, ...mockImages, ...mockImages].map(({ url }, index) => (
        <div key={index} className="w-48">
          <img src={url} />
        </div>
      ))}
    </main>
  );
}
