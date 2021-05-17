import React, { useEffect, useState } from "react";
import NewsAPI from "../../api/NewsApi";

const New = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const callApiNews = async () => {
      const { data } = await NewsAPI.getAllNews();
      setNews(data);
    };
    callApiNews();
  }, []);
  return (
    <div>
      {news.map((news) => (
        <li>{news.title}</li>
      ))}
    </div>
  );
};

export default New;
