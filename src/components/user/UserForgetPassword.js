import React from 'react';
import ForgetPasswordForm from 'components/authentication/ForgetPasswordForm';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const UserForgetPassword = () => {
  return (
    <div className="text-center">
      <h5 className="mb-0"> Forgot your password?</h5>
      <small>Enter your email and we'll send you a reset link.</small>
      <ForgetPasswordForm />
      <Row>
        <Col lg={6}>
        <Link className="fs--1 text-600 w-50 text-start" to="/authentication/user/login" state={{ open: true }}>
          Back to Login
          <span className="d-inline-block ms-1"> &rarr;</span>
        </Link>
        </Col>
        <Col lg={6}>
          <Link className="fs--1 text-600 w-50 text-start" to="#!">
            I can't recover my account using this page
            <span className="d-inline-block ms-1"> &rarr;</span>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserForgetPassword;
