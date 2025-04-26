import {
  Form,
  InputGroup,
  Button,
  Row,
  Col,
  Container,
  Accordion,
} from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { getTopics, postArticle } from "../api";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const { user } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
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

  useEffect(() => {
    getTopics().then((response) => setTopics(response));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    postArticle(newArticle)
      .then((article) => {
        setNewArticle({
          author: user.username,
          title: "",
          body: "",
          topic: "",
          article_img_url: "",
        });
        setIsLoading(false);
        setIsSuccess(true);
        navigate(`/articles/${article.article_id}`);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  return (
    <Accordion className="mb-3 ">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Click here to create a New Article</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={handleSubmit} className="mb-3 mt-3">
            <Row className="mb-3 mt-3">
              <Col>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    value={newArticle.title}
                    name="title"
                    type="text"
                    onChange={(e) => {
                      setNewArticle({
                        ...newArticle,
                        title: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      setNewArticle({
                        ...newArticle,
                        body: e.target.value,
                      });
                    }}
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
                <Form.Select
                  aria-label="Select Topic"
                  value={newArticle.topic}
                  onChange={(e) => {
                    setNewArticle({
                      ...newArticle,
                      topic: e.target.value,
                    });
                  }}
                  required
                >
                  <option>Topics available</option>
                  {topics.map((topic) => {
                    return (
                      <option key={topic.slug} value={topic.slug}>
                        {topic.slug}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3 mt-3">
              <Col>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    onChange={(e) => {
                      setNewArticle({
                        ...newArticle,
                        article_img_url: e.target.value,
                      });
                    }}
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default NewArticle;
