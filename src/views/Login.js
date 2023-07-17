import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import users from "../data/users.js";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.elements.username.value;
    const enteredPassword = e.target.elements.password.value;

    // Find the user with the entered username
    const user = users.find((user) => user.username === enteredUsername);

    if (user && user.password === enteredPassword) {
      // Successful login
      dispatch({ type: "LOGIN", payload: user });
      // Redirect or perform any other actions
      navigate("/admin");
      console.log("username:", username);
    } else {
      // Invalid credentials
      console.log("Invalid username or password");
      // Display error message or perform other actions
    }
  };

  return (
    <div className="login-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md="4">
          <Card>
            <CardHeader>
              <h5 className="title"> {t("login")}</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <label>{t("username")}</label>
                  <Input name="username" placeholder="Username" type="text" />
                </FormGroup>
                <FormGroup>
                  <label>{t("password")}</label>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </FormGroup>
                <div className="text-center">
                  <Button className="btn-fill" color="info" type="submit">
                    {t("login")}
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
