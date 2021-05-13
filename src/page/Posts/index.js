import React, { useEffect, useState } from "react";
import Pagination from "../../component/Pagination";
import PostsList from "../../component/PostsList";

const Posts = () => {
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 2,
    _limit: 10,
    _totalRows: 1000,
  });
  useEffect(() => {
    async function getDateAPI() {
      const url_API = "https://headphoneapi.herokuapp.com/api/products";
      const response = await fetch(url_API);
      const result = await response.json();
      console.log({ result });
      const  data  = result;
      setPostList(data);
    }
    getDateAPI();
  }, []);
  function handleNewPage(newPage) {
    console.log(newPage);
  }
  return (
    <div className="container px-16">
      <PostsList posts={postList}></PostsList>
      <Pagination
        pagination={pagination}
        onPageChange={handleNewPage}
      ></Pagination>
    </div>
  );
};

export default Posts;
