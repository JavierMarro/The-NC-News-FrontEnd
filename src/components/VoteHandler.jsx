import { Card, Button, Container } from "react-bootstrap";
import { updateArticleById } from "../api";
import { useState } from "react";

const VoteHandler = ({ votes, article_id }) => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleUpvote() {
    if (!hasVoted) {
      updateArticleById(article_id, +1).catch(() => {
        setUpvote((currUpvote) => {
          return currUpvote - 1;
        });
      });
      setUpvote((currUpvote) => {
        return currUpvote + 1;
      });
      setHasVoted(true);
      setClicked(true);
    }
  }

  function handleDownvote() {
    if (!hasVoted) {
      updateArticleById(article_id, -1).catch(() => {
        setDownvote((currDonwvote) => {
          return currDonwvote + 1;
        });
      });
      setDownvote((currDonwvote) => {
        return currDonwvote - 1;
      });
      setHasVoted(true);
      setClicked(true);
    }
  }

  return (
    <>
      <Card className="votes-card">
        <Card.Text className="votes-text">
          <strong>Votes: {votes + upvote + downvote}</strong>
        </Card.Text>
        <Container className="votes-button">
          <Button onClick={handleUpvote} variant="success" disabled={hasVoted}>
            Upvote
          </Button>
          <Button onClick={handleDownvote} variant="danger" disabled={hasVoted}>
            Downvote
          </Button>
        </Container>
      </Card>
      {clicked && (
        <p className="votes-message mt-3">Vote casted successfully!</p>
      )}
    </>
  );
};

export default VoteHandler;
