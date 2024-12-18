import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import Comments from "./Comments";
import VoteHandler from "./VoteHandler";

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
    return (
      <>
        <h2 className="loading">Loading the article...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="https://lottie.host/a2174cc3-398a-4a89-a109-44f83698dc6c/wfonPPPWwq.json"
            loop
            autoplay
          />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2 className="loading">Oh no! Something went wrong...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="https://lottie.host/c0663d83-27a8-4aa9-9279-84e3445e78a7/z7fWPxOZrY.json"
            loop
            autoplay
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Card className="mb-3">
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
          <Card.Text className="info-card comment-emoji m-3">
            Number of comments: {articleId.comment_count}
          </Card.Text>
          <Card.Text className="info-card m-3">
            <VoteHandler votes={articleId.votes} article_id={article_id} />
          </Card.Text>
        </Card.Body>
        <Comments article_id={article_id} />
      </Card>
    </>
  );
};

export default ArticleById;
