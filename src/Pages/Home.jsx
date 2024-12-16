import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  if (articles === null) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div>
        <h2>Articles available:</h2>
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </>
  );
};

export default Home;
