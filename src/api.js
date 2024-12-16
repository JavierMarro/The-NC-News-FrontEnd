import axios from "axios";

const api = axios.create({
  baseURL: "https://the-nc-news.onrender.com",
});

const getArticles = () => {
  return api.get("/api/articles").then((response) => {
    return response.data.articles;
  });
};

export { getArticles };
