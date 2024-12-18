import { Card, Button, Container } from "react-bootstrap";
import { updateArticleById } from "../api";
import { useState } from "react";

const VoteHandler = ({ votes, article_id }) => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  function handleUpvote() {
    updateArticleById(article_id, +1).catch(() => {
      setUpvote((currUpvote) => {
        return currUpvote - 1;
      });
    });
    setUpvote((currUpvote) => {
      return currUpvote + 1;
    });
  }

  function handleDownvote() {
    updateArticleById(article_id, -1).catch(() => {
      setDownvote((currDonwvote) => {
        return currDonwvote + 1;
      });
    });
    setDownvote((currDonwvote) => {
      return currDonwvote - 1;
    });
  }

  return (
    <Card className="votes-card">
      <Card.Text className="votes-text">
        <strong>Votes: {votes + upvote + downvote}</strong>
      </Card.Text>

      <Container className="votes-button">
        <Button onClick={handleUpvote} variant="success">
          Upvote
        </Button>
        <Button onClick={handleDownvote} variant="danger">
          Downvote
        </Button>
      </Container>
    </Card>
  );
};

export default VoteHandler;
