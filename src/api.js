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

export { getArticles, getArticleById, getComments, getUsers };
