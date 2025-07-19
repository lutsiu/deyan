import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BlogPageCard from "../components/BlogPage/BlogPageCard";
import PageTitle from "../components/Common/PageTitle";
import PaginationControls from "../components/BlogPage/PaginationControls";
import type { InstagramPost } from "../types/InstagramPostType";

export default function Blog() {
  const [allPosts, setAllPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/instagram/posts");
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        setAllPosts(json.data.slice(0, 30));
      } catch (err: any) {
        const msg = err.message || "Failed to load posts";
        setError(msg);
        toast.error(`🛑 ${msg}`, {
          toastId: "instagram-fetch-error",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchInstagram();
  }, []);

  useEffect(() => {
    const upd = () => {
      const w = window.innerWidth;
      if (w < 640) setPostsPerPage(2);
      else if (w < 1024) setPostsPerPage(4);
      else setPostsPerPage(6);
    };
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const paginated = loading
    ? Array.from({ length: postsPerPage })
    : allPosts.slice(startIdx, startIdx + postsPerPage);

  return (
    <section className="blogAndServicesPagesContainer section-padding">
      <PageTitle title="blog.title" />

      <div className="w-full mt-[4rem] lg:mt-[5.6rem] 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  
                gap-x-[2rem] gap-y-[6.4rem]">
        {paginated.map((post, index) =>
          post ? (
            <BlogPageCard
              key={(post as InstagramPost).id}
              {...(post as InstagramPost)}
            />
          ) : (
            <BlogPageCard key={`skeleton-${index}`}/>
          )
        )}
      </div>

      {!loading && !error && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}
