import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { deleteArticle, getArticleById, updateArticleById } from "../api";
import Comments from "./Comments";
import VoteHandler from "./VoteHandler";
import Loading from "./Loading";
import Error from "./Error";
import { UserContext } from "../contexts/UserContext";

const ArticleById = () => {
  const params = useParams();
  const { article_id } = params;
  const {
    user: { username },
  } = useContext(UserContext);
  const [articleId, setArticleId] = useState({});
  const [deletedArticle, setDeletedArticle] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setArticleId(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteArticle(article_id).then(() => {
        setDeletedArticle(true);
        navigate("/home");
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section>
      <Card.Img
        className="img-id"
        variant="top"
        src={articleId.article_img_url}
      />
      <Card.Body className="m-3">
        <Card.Title>
          <strong className="title-id m-3">{articleId.title}</strong>
        </Card.Title>
        <Card.Text className="article-details m-3">
          by: <strong>{articleId.author}</strong> / Created on:{" "}
          {articleId.created_at.slice(0, 10)}
        </Card.Text>
        <Card.Text className="body-id m-3">{articleId.body}</Card.Text>
        {username === articleId.author ? (
          <Button
            onClick={handleDelete}
            variant="danger"
            className="lg m-3 "
            type="submit"
          >
            Delete article
          </Button>
        ) : null}
        <VoteHandler
          votes={articleId.votes}
          id={article_id}
          votingFn={updateArticleById}
        />
      </Card.Body>

      <Comments article_id={article_id} />
    </section>
  );
};

export default ArticleById;
