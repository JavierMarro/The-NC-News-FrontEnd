import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card className="mb-3">
      <Card.Img
        className="article-img"
        variant="top"
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
          posted by: <strong>{article.author}</strong> /{" "}
          {article.created_at.slice(0, 10)}
        </Card.Text>

        <Card.Text className="info-card comment-emoji">
          💬 {article.comment_count}
        </Card.Text>
        <Card.Text className="info-card">Votes: {article.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
