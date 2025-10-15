import PostForm from '@/components/dashboard/buyer-dashboard/add-post/components/PostForm'
import React from 'react'

function page() {
  return (
    <>
      <div className="mt-5  py-30  ">
        <h2>BUYER</h2>
        <div className="mt-5 py-30 px-30 rounded-4 bg-white shadow-3">
          <PostForm />
        </div>
      </div>
    </>
  )
}

export default page