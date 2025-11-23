import PostForm from "@/components/dashboard/buyer-dashboard/add-post/components/PostForm";


const Index = () => {
  return (
    <>
     <div className="mt-5 py-30 px-30 rounded-4 bg-white shadow-3 ">

      <h2 className="ml-5">Create a buyer post</h2>
        <div className="m-5 py-30 px-30 rounded-5 bg-white shadow-1">
          <PostForm />
        </div>
      </div>
    </>
  )
};

export default Index;
