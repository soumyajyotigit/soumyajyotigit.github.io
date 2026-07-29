type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [
    { slug: "devsecops-best-practices" },
    { slug: "getting-started-with-nextjs-14" },
    { slug: "kubernetes-for-beginners" },
    { slug: "mastering-typescript" },
  ];
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen px-6 pt-28">
      <article className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">{params.slug}</h1>
        <p className="mt-4 text-slate-600">
          This post is coming soon.
        </p>
      </article>
    </main>
  );
}
