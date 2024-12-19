import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm(`Do you really want to sign in as ${username}?`)) {
      navigate("/home");
      setUser({ username: username });
    }
  };

  return (
    <>
      <h2 className="mt-3 mb-3">Sign in to access your account</h2>
      <Form onSubmit={handleSubmit} className="votes-card">
        <Form.Group className="mb-3">
          <Form.Label className="login-text">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            value={username}
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            Make sure to log in as one of our existing users.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
          <Form.Text className="text-muted">
            Password set to be the same as the username.
          </Form.Text>
        </Form.Group>
        <Container>
          <Button
            className="btn-flat btn-xxl"
            variant="flat"
            size="xxl"
            type="submit"
          >
            Login
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default Login;
