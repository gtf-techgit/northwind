import { notFound } from "next/navigation";
import BlogDetail from "@/website/components/pages/blogs/BlogDetail";
import { blogItems } from "@/website/lib/data/blogs";

export async function generateStaticParams() {
  return blogItems.map((item) => ({ slug: item.slug }));
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = blogItems.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const latestBlogs = blogItems.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <main>
      <BlogDetail blog={blog} latestBlogs={latestBlogs} />
    </main>
  );
};

export default Page;
