import { Form, InputGroup, Button, Row, Col, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postArticle } from "../api";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const { user } = useContext(UserContext);
  const [newArticle, setNewArticle] = useState({
    author: user.username,
    title: "",
    body: "",
    topic: "",
    article_img_url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewArticle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    postArticle(newArticle)
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        navigate("/");
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
              name="title"
              value={newArticle.title}
              type="text"
              required
              placeholder="Title"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={handleChange}
              name="body"
              value={newArticle.body}
              type="text"
              required
              placeholder="Body"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={handleChange}
              name="topic"
              value={newArticle.topic}
              type="text"
              required
              placeholder="Topic"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={handleChange}
              name="article_img_url"
              value={newArticle.article_img_url}
              type="text"
              required
              placeholder="Image URL"
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
          Failed to post article. Please try again.
        </p>
      )}
      {isSuccess && (
        <p style={{ color: "green" }}>Article posted successfully!</p>
      )}
    </Form>
  );
};
export default NewArticle;
