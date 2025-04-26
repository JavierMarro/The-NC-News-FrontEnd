import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Button, Container } from "react-bootstrap";
import { updateArticleById } from "../api";
import { useState } from "react";

const VoteHandler = ({ votes, article_id }) => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  function handleUpvote() {
    if (upvote === 0 && downvote === 0) {
      updateArticleById(article_id, +1).catch(() => {
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
      updateArticleById(article_id, -1).catch(() => {
        setDownvote((currDonwvote) => {
          return currDonwvote + 1;
        });
      });
      setDownvote((currDonwvote) => {
        return currDonwvote - 1;
      });
    }
  }

  return (
    <>
      <Card className="votes-card">
        <Container
          className="votes-button mb-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={handleUpvote}
            variant="success"
            disabled={upvote !== 0 || downvote !== 0}
            className="me-2"
          >
            <i className="bi bi-hand-thumbs-up"></i>
          </Button>
          <Button
            onClick={handleDownvote}
            variant="danger"
            disabled={upvote !== 0 || downvote !== 0}
          >
            <i className="bi bi-hand-thumbs-down"></i>
          </Button>
        </Container>
        <Card.Text className="votes-text text-center">
          <strong>Votes: {votes + upvote + downvote}</strong>
        </Card.Text>
      </Card>
      {(upvote !== 0 || downvote !== 0) && (
        <p className="votes-message mt-3">Thanks for casting your vote!</p>
      )}
    </>
  );
};

export default VoteHandler;
