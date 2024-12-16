const ArticleCard = ({ article }) => {
  return (
    <div>
      <p>
        <strong>{article.title}</strong>
      </p>
      <p>
        Posted by: {article.author} / Category: {article.topic}
      </p>
      <img src={article.article_img_url} />
      <p>Number of comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleCard;
