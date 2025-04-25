import axios from "axios";

const api = axios.create({
  baseURL: "https://the-nc-news.onrender.com/api",
});

const getArticles = (
  topic,
  sortBy = "created_at",
  order = "DESC",
  p = 1,
  limit = 9
) => {
  const params = {
    sort_by: sortBy,
    order: order,
    p: p,
    limit: limit,
  };
  if (topic) params.topic = topic;
  return api
    .get("/articles", {
      params,
    })
    .then((response) => {
      return {
        articles: response.data.articles,
        total_count: response.data.total_count,
      };
    });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

const postArticle = (newArticle) => {
  return api.post("/articles", newArticle).then((response) => {
    return response.data.article;
  });
};

const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

const getUsers = () => {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
};

const updateArticleById = (article_id, input) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: input });
};

const postComment = (article_id, username, commentToPost) => {
  return api.post(`/articles/${article_id}/comments`, {
    username: username,
    body: commentToPost,
  });
};

const deleteComment = (commentsId) => {
  return api.delete(`/comments/${commentsId}`);
};

const getTopics = () => {
  return api.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export {
  getArticles,
  getArticleById,
  postArticle,
  getComments,
  getUsers,
  updateArticleById,
  postComment,
  deleteComment,
  getTopics,
};
