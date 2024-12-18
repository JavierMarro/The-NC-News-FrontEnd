import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUsers } from "../api";

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserDetails(users);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h2 className="loading">Loading some articles for you...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="https://lottie.host/3c5a1f44-8bee-49fc-a0bb-c89698dbd088/YRwlnz4xaH.json"
            loop
            autoplay
          />
        </div>
      </>
    );
  }
  if (error) {
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
    <Container>
      <h2 className="my-4">Users:</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="row-style">
        {userDetails.map((user, index) => (
          <Col key={index}>
            <Card className="mb-3">
              <Card.Img
                className="article-img"
                variant="top"
                src={user.avatar_url}
              />
              <Card.Body>
                <Card.Title variant="bottom">
                  <strong>{user.username}</strong>
                </Card.Title>
                <Card.Text>Name: {user.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
