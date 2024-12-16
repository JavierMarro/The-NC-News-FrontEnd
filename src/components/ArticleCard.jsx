import { Card } from "react-bootstrap";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <strong>{article.title}</strong>
        </Card.Title>
        <Card.Text>Posted by: {article.author}</Card.Text>
        <Card.Text className="category-card">
          Category: {article.topic}
        </Card.Text>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Text>Number of comments: {article.comment_count}</Card.Text>
        <Card.Text>Votes: {article.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
