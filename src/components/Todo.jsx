import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/action/todoAction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcEmptyTrash } from "react-icons/fc";

function TodoList() {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const todos = useSelector((state) => state.todo.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputTodo("");

    dispatch(addTodo(inputTodo));
  };

  const handleDelete = (id) => {
    console.log("data dihapus", id);
    dispatch(deleteTodo(id));
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div>
      <div className="formInput">
        <Form onSubmit={handleSubmit}>
          <Form.Group id="formGroup">
            <Form.Control style={{ width: "500px" }} id="formControl" type="text" placeholder="Enter Todo" name="inputTodo" value={inputTodo} onChange={handleChange} required />
            {isUpdate ? (
              <Button
                variant="outline-dark"
                type="Submit"
                onClick={() => {
                  setIsUpdate(false);
                }}
              >
                Update
              </Button>
            ) : (
              <Button variant="outline-dark" type="Submit">
                Add
              </Button>
            )}
          </Form.Group>
        </Form>
      </div>
      <div className="Card">
        <Card style={{ width: "550px" }}>
          <Card.Body>
            <h6>List Activity</h6>
            <ul>
              {todos.map((el) => (
                <li key={el.id}>
                  {el.title}
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      setInputTodo(el.title);
                      setIsUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <FcEmptyTrash className="trashIcon" size="32" onClick={() => handleDelete(el.id)} />
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TodoList;
