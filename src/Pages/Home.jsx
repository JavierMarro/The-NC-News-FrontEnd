import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "../components/ArticleCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  if (articles === null) {
    return <h2>Fetching some articles...</h2>;
  }

  return (
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
  );
};

export default Home;
