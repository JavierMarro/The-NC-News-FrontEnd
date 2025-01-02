import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import Comments from "./Comments";
import VoteHandler from "./VoteHandler";
import Loading from "./Loading";
import Error from "./Error";

const ArticleById = () => {
  const params = useParams();
  const { article_id } = params;
  const [articleId, setArticleId] = useState({});
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
        <VoteHandler votes={articleId.votes} article_id={article_id} />
      </Card.Body>
      <Comments article_id={article_id} />
    </section>
  );
};

export default ArticleById;
