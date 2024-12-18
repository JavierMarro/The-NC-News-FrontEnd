import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container, Form, InputGroup, Button, Row, Col } from "react-bootstrap";
import CommentCard from "./CommentCard";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getComments, postComment } from "../api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const {
    user: { username },
  } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    setNewComment(e.target.value);
    setCommentSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    postComment(article_id, username, newComment)
      .then(() => {
        setNewComment("");
        setCommentSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [commentSubmitted]);

  if (isLoading) {
    return (
      <>
        <h2 className="loading">Loading comments...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="https://lottie.host/9fb3d1ef-4fba-4795-8785-9fdd79e8b128/u2KxAANRNk.json"
            loop
            autoplay
          />
        </div>
      </>
    );
  }

  if (isError) {
    return <h3>Oh no! No comments to show...</h3>;
  }

  return (
    <>
      <Container>
        <h4>
          <strong>Comments:</strong>
        </h4>
        <Form onSubmit={handleSubmit} className="mb-3 mt-3">
          <Row className="mb-3 mt-3">
            <Col>
              <InputGroup>
                <InputGroup.Text className="lg">New Comment</InputGroup.Text>
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
            <Button variant="dark" className="lg" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
      <ul>
        {comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })}
      </ul>
    </>
  );
};

export default Comments;
