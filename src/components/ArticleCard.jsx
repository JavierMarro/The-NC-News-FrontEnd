import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link to={`/articles/${article.article_id}`}>
            <strong className="article-title">{article.title}</strong>
          </Link>
        </Card.Title>
        <Card.Text>
          Posted by: {article.author} / Category: {article.topic}
        </Card.Text>
        <Card.Img
          className="article-img"
          variant="top"
          src={article.article_img_url}
        />
        <Card.Text className="info-card comment-emoji">
          💬 {article.comment_count}
        </Card.Text>
        <Card.Text className="info-card">Votes: {article.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
