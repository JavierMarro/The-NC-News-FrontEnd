import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order") || "DESC";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(sortBy, orderBy)
      .then((data) => {
        if (topic !== undefined) {
          const filteredArticles = data.filter((filteredTopic) => {
            return filteredTopic.topic === topic;
          });
          setArticles(filteredArticles);
          setLoading(false);
        } else {
          setArticles(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [topic, sortBy, orderBy]);

  const handleSortBy = (e) => {
    const selectedSortBy = e.target.value;
    setSearchParams({
      sort_by: selectedSortBy,
      order: orderBy,
    });
  };

  const handleOrderBy = () => {
    const selectedOrderBy = orderBy === "ASC" ? "DESC" : "ASC";
    setSearchParams({
      sort_by: sortBy,
      order: selectedOrderBy,
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <main>
      <h2 className="my-4">News Articles</h2>
      <Row className="mb-4">
        <Col>
          <label htmlFor="sortBy">Sort Articles By</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortBy}
            className="sortby"
          >
            <option value="created_at">Date Created</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
          </select>
        </Col>
        <Col>
          <button onClick={handleOrderBy} className="orderby">
            Order: {orderBy === "ASC" ? "Ascending" : "Descending"}
          </button>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {articles.map((article, index) => {
          return (
            <Col key={index}>
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
    </main>
  );
};

export default Home;
