import axios from "axios";

const api = axios.create({
  baseURL: "https://the-nc-news.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
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

export {
  getArticles,
  getArticleById,
  getComments,
  getUsers,
  updateArticleById,
  postComment,
  deleteComment,
};
