import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const NoteForm = ({ getData }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://649098c31e6aa71680cb8adf.mockapi.io/todo",
        {
          title: title,
        }
      );
      console.log("Todo created:", response.data);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
    setTitle("");
    getData();
  };

  return (
    <Container className="p-3 bg-light rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Create a new todo.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Note
        </Button>
      </Form>
    </Container>
  );
};

export default NoteForm;
