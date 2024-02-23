import React, { useState } from "react";
import "../Styling/SignupPage1.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fb from "../Images/facebook.png";
import google from "../Images/google.png";
import axios from "axios";

function SignupPage1() {
  const [signupData, setSignupData] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    PhoneNumber: "",
    Password: "",
  });
  const frontSignupData = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setSignupData({ ...signupData, [name]: value });
  };

  const onSignup = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:7000/signup/login",
        signupData,
        config
      );
      console.log(data.data);
    } catch (error) {
      console.log("Signup failed", error);
    }
  };

  return (
    <div>
      <div>
        <Form className="sform1" onSubmit={(e) => e.preventDefault()}>
          <h1 id="loginHeading"> SIGN UP</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" value={signupData.FirstName} name="FirstName" onChange={frontSignupData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" value={signupData.LastName} name="LastName" onChange={frontSignupData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" value={signupData.EmailAddress} name="EmailAddress" onChange={frontSignupData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" value={signupData.PhoneNumber} name="PhoneNumber" onChange={frontSignupData} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" value={signupData.Password} name="Password" onChange={frontSignupData} />
          </Form.Group>

          <Button variant="dark" id="loginbtn1" onClick={onSignup}>
            SIGN UP
          </Button>
          <Link to="/signup">
            {" "}
            <a id="signupLink1" href="#">
              Already have an account ?
            </a>
          </Link>
          <a href="#" className="fblink">
            <Button id="fbbtn">
              <img id="fbicon" src={fb}></img>SignIn with facebook
            </Button>
          </a>
          <a href="#" className="glink">
            <Button id="gbtn" variant="danger">
              <img id="gicon" src={google}></img>SignIn with google
            </Button>
          </a>
        </Form>
      </div>
    </div>
  );
}

export default SignupPage1;
