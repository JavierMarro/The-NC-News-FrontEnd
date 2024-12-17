import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";

const ArticleById = () => {
  const params = useParams();
  const { article_id } = params;
  const [articleId, setArticleId] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
    return <h2>Oh no! Something went wrong...</h2>;
  }

  return (
    <>
      <Card>
        <Card.Img
          className="img-id"
          variant="top"
          src={articleId.article_img_url}
        />
        <Card.Body>
          <Card.Title>
            <strong className="title-id">{articleId.title}</strong>
          </Card.Title>
          <Card.Text>
            Posted by: {articleId.author} / Category: {articleId.topic}
          </Card.Text>
          <Card.Text className="body-id">{articleId.body}</Card.Text>
          <Card.Text className="info-card comment-emoji">
            Number of comments: {articleId.comment_count}
          </Card.Text>
          <Card.Text className="info-card">Votes: {articleId.votes}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ArticleById;
