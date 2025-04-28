import { Card, CardBody, Container, Button } from "react-bootstrap";
import { deleteComment, updateCommentById } from "../api";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import VoteHandler from "./VoteHandler";

const CommentCard = ({ comment, setDeletedComment }) => {
  const {
    user: { username },
  } = useContext(UserContext);
  const commentId = comment.comment_id;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteComment(commentId).then(() => {
        setDeletedComment(true);
      });
      setDeletedComment(false);
    }
  };

  return (
    <>
      <Container>
        <Card className="mb-3">
          <CardBody>
            <Card.Text className="article-details">
              <strong>{comment.author}</strong> /{" "}
              {comment.created_at.slice(0, 10)}
            </Card.Text>
            <Card.Text className="body-id">{comment.body}</Card.Text>
            <VoteHandler
              votes={comment.votes}
              id={comment.comment_id}
              votingFn={updateCommentById}
              variant="comment"
            />
            {username === comment.author ? (
              <Button
                onClick={handleDelete}
                variant="danger"
                className="mb-3 "
                type="submit"
              >
                Delete comment
              </Button>
            ) : null}
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CommentCard;
