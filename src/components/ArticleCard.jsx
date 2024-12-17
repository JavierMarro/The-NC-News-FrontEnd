import { Card } from "react-bootstrap";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <strong>{article.title}</strong>
        </Card.Title>
        <Card.Text>
          Posted by: {article.author} / Category: {article.topic}
        </Card.Text>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Text className="info-card">💬 {article.comment_count}</Card.Text>
        <Card.Text className="info-card">Votes: {article.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
