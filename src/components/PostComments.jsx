import { useEffect, useState } from "react";
import { getUsers, postComment, postItem } from "../api";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

const PostComment = () => {
  const [commentBody, setCommentBody] = useState("");
  const [postedBy, setPostedBy] = useState(0);
  const [allInputs, setAllInputs] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((userArr) => {
      const justIDs = userArr.map((user) => {
        return user.user_id;
      });
      setUsers(justIDs);
    });
  }, []);

  function handleCommentBody(e) {
    setCommentBody(e.target.value);
  }

  function handlePostedBy(e) {
    setPostedBy(e.target.value);
  }

  function submitPost(e) {
    e.preventDefault();
    setClicked(true);
    if (
      commentBody &&
      Number.isInteger(Number(postedBy)) &&
      users.includes(Number(postedBy))
    ) {
      setAllInputs(true);
      const newComment = {
        body: commentBody,

        posted_by: Number(postedBy),
      };
      postComment(newComment);
    } else {
      setAllInputs(false);
    }
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Comment:</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="Item Description"
          value={commentBody}
          onChange={handleCommentBody}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon5">Posted By</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="Enter User ID"
          aria-label="Listed By"
          value={postedBy}
          onChange={handlePostedBy}
        />
      </InputGroup>

      <Button variant="primary" onClick={submitPost}>
        Post Comment
      </Button>

      {clicked &&
        (allInputs ? (
          <p>Comment posted successfully!</p>
        ) : (
          <p>Please fill all input fields.</p>
        ))}
    </>
  );
};

export default PostComment;
