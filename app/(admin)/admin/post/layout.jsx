"use client";

import PostHeader from '../../../../components/admin/post-components/PostHeader'
import PostFooter from '../../../../components/admin/post-components/PostFooter'

export default function UserDashboardLayout({ children }) {
  return (
    <div className="">
      {/* Persistent Header */}
      <PostHeader />
      <div className="">
        <div className="dashboard__content bg-light-2">
          {children}
          <PostFooter />
        </div>
      </div>
    </div>
  );
}
