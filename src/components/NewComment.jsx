import { Form, InputGroup, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { postComment } from "../api";

const NewComment = ({ article_id, handleCommentPosted, user }) => {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const username = user.username;

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    postComment(article_id, username, newComment)
      .then(() => {
        setNewComment("");
        setIsLoading(false);
        handleCommentPosted();
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 mt-3">
      <Row className="mb-3 mt-3">
        <Col>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={handleChange}
              name="new-comment"
              value={newComment}
              type="text"
              required
              placeholder="Type your comment here..."
            />
          </InputGroup>
        </Col>
      </Row>
      <Container className="mb-3">
        <Button variant="dark" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </Container>
      {isError && (
        <p style={{ color: "red" }}>
          Failed to post comment. Please try again.
        </p>
      )}
    </Form>
  );
};

export default NewComment;
