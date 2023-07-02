import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiTwotoneDelete } from "react-icons/ai";

import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Note = ({ title, completed, onDelete, onCheckboxClick }) => {
  const handleDeleteClick = () => {
    onDelete();
  };

  const handleCheckboxClick = () => {
    onCheckboxClick();
  };

  return (
    <Container className={`container mt-3 p-2 rounded bg-light`}>
      <ListGroup className="list">
        <ListGroup.Item
          className={`note-title ${
            !completed ? "completed" : "text-secondary"
          }`}
        >
          <div className="items">
            <div>
              {completed ? (
                <ImCheckboxChecked
                  className="checked"
                  onClick={handleCheckboxClick}
                />
              ) : (
                <ImCheckboxUnchecked
                  className="unchecked"
                  onClick={handleCheckboxClick}
                />
              )}{" "}
            </div>
            <div> {title} </div>
          </div>

          <div>
            <AiTwotoneDelete className="delete" onClick={handleDeleteClick} />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Note;
