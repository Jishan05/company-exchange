import React from "react";
import PropTypes from "prop-types";
import PostForm from "@/components/dashboard/seller-dashboard/add-post/components/PostForm";

function page(props) {
  return (
    <>
      <div className="mt-5  py-30  ">
        <h2>SELLER</h2>
        <div className="mt-5 py-30 px-30 rounded-4 bg-white shadow-3">
          <PostForm />
        </div>
      </div>
    </>
  );
}

export default page;
