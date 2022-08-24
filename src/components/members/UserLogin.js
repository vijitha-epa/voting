import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Flex from 'components/common/Flex';
import LoginForm from 'components/authentication/LoginForm';

const Login = () => (
  <>
    <Flex justifyContent="between" alignItems="center" className="mb-2">
      <h6>No account?</h6>
      <p className="fs--1 text-600 mb-0">
        <NavLink
          end={false}
          to={"/authentication/user/register"}
          state={{ open: true }}
          className={'active nav-link mt-2'}>
          Create an account
        </NavLink>
        {/*or <Link to="/authentication/user/register">Create an account</Link>*/}
      </p>
    </Flex>
    <LoginForm layout="user"/>
  </>
);

export default Login;
