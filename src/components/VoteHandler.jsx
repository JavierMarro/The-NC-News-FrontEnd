import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Button, Container } from "react-bootstrap";
import { useState } from "react";

const VoteHandler = ({ votes, id, votingFn, variant }) => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  function handleUpvote() {
    if (upvote === 0 && downvote === 0) {
      votingFn(id, +1).catch(() => {
        setUpvote((currUpvote) => {
          return currUpvote - 1;
        });
      });
      setUpvote((currUpvote) => {
        return currUpvote + 1;
      });
    }
  }

  function handleDownvote() {
    if (upvote === 0 && downvote === 0) {
      votingFn(id, -1).catch(() => {
        setDownvote((currDownvote) => {
          return currDownvote + 1;
        });
      });
      setDownvote((currDownvote) => {
        return currDownvote - 1;
      });
    }
  }
  // Check if the variant is "comment" to adjust styles
  const isComment = variant === "comment";
  const buttonSize = isComment ? "sm" : "md";
  const iconStyle = isComment ? { fontSize: "1rem" } : { fontSize: "1.5rem" };
  const containerStyle = isComment
    ? { display: "flex", justifyContent: "flex-end", marginTop: "0.5rem" }
    : { display: "flex", justifyContent: "center" };

  return (
    <>
      {isComment ? (
        <>
          <Container className="votes-button mb-2" style={containerStyle}>
            <Button
              onClick={handleUpvote}
              variant="success"
              disabled={upvote !== 0 || downvote !== 0}
              className="me-2"
              size={buttonSize}
            >
              <i className="bi bi-hand-thumbs-up" style={iconStyle}></i>
            </Button>
            <Button
              onClick={handleDownvote}
              variant="danger"
              disabled={upvote !== 0 || downvote !== 0}
              size={buttonSize}
            >
              <i className="bi bi-hand-thumbs-down" style={iconStyle}></i>
            </Button>
          </Container>
          <div
            style={{
              textAlign: "right",
              fontSize: "0.9rem",
              marginTop: "0.4rem",
              marginRight: "0.8rem",
            }}
          >
            <strong>Votes: {votes + upvote + downvote}</strong>
          </div>
        </>
      ) : (
        <Card className="votes-card">
          <Container className="votes-button mb-2" style={containerStyle}>
            <Button
              onClick={handleUpvote}
              variant="success"
              disabled={upvote !== 0 || downvote !== 0}
              className="me-2"
              size={buttonSize}
            >
              <i className="bi bi-hand-thumbs-up" style={iconStyle}></i>
            </Button>
            <Button
              onClick={handleDownvote}
              variant="danger"
              disabled={upvote !== 0 || downvote !== 0}
              size={buttonSize}
            >
              <i className="bi bi-hand-thumbs-down" style={iconStyle}></i>
            </Button>
          </Container>
          <Card.Text className="votes-text text-center">
            <strong>Votes: {votes + upvote + downvote}</strong>
          </Card.Text>
        </Card>
      )}
      {(upvote !== 0 || downvote !== 0) && (
        <p
          className="votes-message mt-3"
          style={isComment ? { fontSize: "0.85rem" } : {}}
        >
          Thanks for casting your vote!
        </p>
      )}
    </>
  );
};

export default VoteHandler;
