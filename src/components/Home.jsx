import { Row, Col, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";
import NewArticle from "./NewArticle";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const orderBy = searchParams.get("order") || "DESC";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const articlesPerPage = 10;

  // reset page when navigating to new topic or homepage
  useEffect(() => {
    setCurrentPage(1);
  }, [topic, sortBy, orderBy]);

  useEffect(() => {
    setLoading(true);
    getArticles(topic, sortBy, orderBy, currentPage, articlesPerPage)
      .then((data) => {
        setArticles(data.articles); //Directly setting articles from API res
        const totalCount = data.total_count;
        setTotalPages(Math.ceil(totalCount / articlesPerPage));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [topic, sortBy, orderBy, currentPage, articlesPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortBy = (e) => {
    const selectedSortBy = e.target.value;
    setSearchParams({
      sort_by: selectedSortBy,
      order: orderBy,
    });
  };

  const handleOrderBy = () => {
    const selectedOrderBy = orderBy === "ASC" ? "DESC" : "ASC";
    setSearchParams({
      sort_by: sortBy,
      order: selectedOrderBy,
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <main>
      <NewArticle />
      <Row className="mb-4">
        <Col>
          <label htmlFor="sortBy">Sort Articles By</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortBy}
            className="sortby"
          >
            <option value="created_at">Date Created</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
          </select>
        </Col>
        <Col>
          <button onClick={handleOrderBy} className="orderby">
            Order: {orderBy === "ASC" ? "Ascending" : "Descending"}
          </button>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {articles.map((article, index) => {
          return (
            <Col key={index}>
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
      <Pagination className="mt-4 justify-content-center">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </main>
  );
};

export default Home;
