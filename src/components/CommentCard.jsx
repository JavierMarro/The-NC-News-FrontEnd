import { Card, CardBody, Container } from "react-bootstrap";

const CommentCard = ({ comment }) => {
  return (
    <Container>
      <Card className="mb-3">
        <CardBody>
          <Card.Text className="article-details">
            <strong>{comment.author}</strong> {comment.created_at.slice(0, 10)}
          </Card.Text>
          <Card.Text className="body-id">Comment: {comment.body}</Card.Text>
          <Card.Text>Votes: {comment.votes}</Card.Text>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CommentCard;
