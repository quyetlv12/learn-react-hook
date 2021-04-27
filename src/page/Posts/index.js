import React, { useEffect, useState } from "react";
import PostsList from "../../component/PostsList";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function getDateAPI() {
      const url_API =
        "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
      const response = await fetch(url_API);
      const result = await response.json();
      console.log({result});
      const {data} = result
      setPostList(data)
    }
    getDateAPI();
  }, []);
  console.log(postList);
  return (
    <div className="container px-16">
      <PostsList posts={postList}></PostsList>
    </div>
  );
};

export default Posts;
