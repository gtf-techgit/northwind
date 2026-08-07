"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import type { BlogItem } from "@/website/types/blogs";

interface BlogDetailProps {
  blog: BlogItem;
  latestBlogs: BlogItem[];
}

const BlogDetail = ({ blog, latestBlogs }: BlogDetailProps) => {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: blog.title, url });
      } catch {
        // user cancelled the share sheet
      }
      return;
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      <div className="relative h-70 w-full md:h-screen">
        <Image src={blog.image} alt={blog.title} fill priority className="object-cover" />
      </div>

      <section className="relative w-full section-padding">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <article className="lg:col-span-2">
            <h1 className="font-heading text-3xl text-primary md:text-4xl">{blog.title}</h1>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs uppercase tracking-wide text-primary/50">
                  Published On
                </p>
                <p className="mt-1 font-body text-sm font-semibold text-primary">{blog.date}</p>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="flex cursor-pointer items-center gap-2 rounded-full border-default px-4 py-2 font-body text-sm text-primary transition-colors hover:bg-primary/5"
              >
                <FiShare2 size={15} />
                Share
              </button>
            </div>

            <div className="mt-8 space-y-5">
              {blog.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="font-heading text-xl text-primary md:text-2xl pt-2"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "image") {
                  return (
                    <div
                      key={index}
                      className="relative h-64 w-full overflow-hidden rounded-xl-custom sm:h-80 md:h-96"
                    >
                      <Image
                        src={block.src}
                        alt={block.alt ?? blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                }

                return (
                  <p key={index} className="font-body text-sm leading-relaxed text-primary/60 md:text-base">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>

          {latestBlogs.length > 0 && (
            <aside className="lg:col-span-1">
              <h2 className="font-heading text-xl text-primary">Latest Blogs</h2>
              <div className="mt-4 space-y-4 border-t border-primary/10 pt-4">
                {latestBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blogs/${item.slug}`}
                    className="flex gap-3 border-b border-primary/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg-custom">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 font-body text-xs text-primary/60">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
