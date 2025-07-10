import { useState, useEffect } from "react";
import BlogPageCard from "../components/BlogPage/BlogPageCard";
import PageTitle from "../components/Common/PageTitle";
import PaginationControls from "../components/BlogPage/PaginationControls";

export default function Blog() {
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `DEYAN AUTO – автосервис в самом центре Варшавы ${i}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    const updatePostsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setPostsPerPage(2);
      else if (width < 1024) setPostsPerPage(4);
      else setPostsPerPage(6);
    };

    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);
    return () => window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIdx, startIdx + postsPerPage);

  return (
    <main className="blogAndServicesPagesContainer section-padding">
      <PageTitle title="blog.title" />

      <div className="w-full mt-[4rem] lg:mt-[5.6rem] 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  
                      gap-x-[2rem] gap-y-[6.4rem]">
        {paginatedPosts.map((post) => (
          <BlogPageCard key={post.id} title={post.title} />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
