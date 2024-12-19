import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Container } from "react-bootstrap";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import { useEffect, useState } from "react";
import { getComments } from "../api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = () => {
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
  };

  useEffect(() => {
    fetchComments();
  }, [deletedComment]);

  const handleCommentPosted = () => {
    fetchComments();
  };

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
        <NewComment
          article_id={article_id}
          handleCommentPosted={handleCommentPosted}
        />
      </Container>
      <ul>
        {comments.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              comment={comment}
              setDeletedComment={setDeletedComment}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
