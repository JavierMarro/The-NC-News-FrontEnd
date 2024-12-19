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
        <Card.Text className="votes-text">
          <strong>Votes: {votes + upvote + downvote}</strong>
        </Card.Text>
        <Container className="votes-button">
          <Button
            onClick={handleUpvote}
            variant="success"
            disabled={upvote !== 0 || downvote !== 0}
          >
            Upvote
          </Button>
          <Button
            onClick={handleDownvote}
            variant="danger"
            disabled={upvote !== 0 || downvote !== 0}
          >
            Downvote
          </Button>
        </Container>
      </Card>
      {(upvote !== 0 || downvote !== 0) && (
        <p className="votes-message mt-3">Vote casted successfully!</p>
      )}
    </>
  );
};

export default VoteHandler;
