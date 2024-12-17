import { Card, CardBody } from "react-bootstrap";

const CommentCard = ({ comment }) => {
  return (
    <Card>
      <CardBody>
        <Card.Text>Author: {comment.author}</Card.Text>
        <Card.Text>Posted on: {comment.created_at.slice(0, 10)}</Card.Text>
        <Card.Text className="body-id">Comment: {comment.body}</Card.Text>
        <Card.Text>Votes: {comment.votes}</Card.Text>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
