import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return <h2>Loading some articles for you...</h2>;
  }

  return (
    <>
      <Container>
        <h2 className="my-4">News Articles</h2>
        <Row xs={1} sm={2} className="row-style">
          {articles.map((article, index) => {
            return (
              <Col key={index}>
                <ArticleCard article={article} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {error && <p>Oh no! Something went wrong...</p>}
    </>
  );
};

export default Home;
