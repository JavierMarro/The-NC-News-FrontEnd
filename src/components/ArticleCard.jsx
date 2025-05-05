import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = React.memo(({ article }) => {
  return (
    <section>
      <Card className="mb-3 article-card" border="dark">
        <Card.Img
          className="article-img"
          variant="top"
          alt="Article's image"
          src={article.article_img_url}
        />
        <Card.Body>
          <Card.Title>
            <Link
              to={`/articles/${article.article_id}`}
              style={{ textDecoration: "none" }}
            >
              <strong className="article-title">{article.title}</strong>
            </Link>
          </Card.Title>
          <Card.Text className="article-details">
            posted by: <strong>{article.author}</strong>
          </Card.Text>
          <Card.Text className="info-card comment-emoji">
            💬 {article.comment_count}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {article.created_at.slice(0, 10)}
          </small>
        </Card.Footer>
      </Card>
    </section>
  );
});

export default ArticleCard;
