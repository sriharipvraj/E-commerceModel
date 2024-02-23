import React from "react";
import "../Styling/Admin.css";
import { Button, Form } from "react-bootstrap";

function Admin() {
  return (
    <div>
      <div>
        <Form className="adminForm">
            <h2>ADMIN LOGIN</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Admin Id</Form.Label>
            <Form.Control type="text" placeholder="Admin Id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant='success' id='adminbtn'>LOGIN</Button>
        </Form>
      </div>
    </div>
  );
}

export default Admin;
