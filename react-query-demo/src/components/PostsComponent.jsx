// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      // ✅ Add caching options
      cacheTime: 1000 * 60 * 5, // keep cache for 5 minutes
      staleTime: 1000 * 30, // data considered fresh for 30s
      refetchOnWindowFocus: true, // refetch when window regains focus
      keepPreviousData: true, // keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
