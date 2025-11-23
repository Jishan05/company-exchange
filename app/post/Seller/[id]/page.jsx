"use client";

import { useParams } from "next/navigation";
import PostForm from "@/components/dashboard/seller-dashboard/add-post/components/PostForm";
import { useEffect, useState } from "react";

const Index = () => {
  const params = useParams();
  const [id, setId] = useState(null);

  // safely set id
  useEffect(() => {
    if (params?.id) {
      setId(params.id);
    }
  }, [params]);

  // When id is not ready (first render)
  if (!id) {
    return (
      <div className="mt-5 py-30 px-30 rounded-4 bg-white shadow-3">
        <h2 className="ml-5">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="mt-5 py-30 px-30 rounded-4 bg-white shadow-3">
      <h2 className="ml-5">Update seller post (ID: {id})</h2>

      <div className="m-5 py-30 px-30 rounded-5 bg-white shadow-1">
        <PostForm sellerId={id} mode="edit" />
      </div>
    </div>
  );
};

export default Index;
