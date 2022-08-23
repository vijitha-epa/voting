import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Divider from "../common/Divider";
import SocialAuthButtons from "../authentication/SocialAuthButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// AccountForm.js
const UserAccountForm = ({ register, errors, watch }) => {
  return (
    <>
      <WizardInput
        label={
          <>
            Name
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>User name to be visible in public</Tooltip>}
            >
                <span>
                  <FontAwesomeIcon icon="question-circle" className="mx-2" />
                </span>
            </OverlayTrigger>
          </>
        }
        name="name"
        errors={errors}
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('name')
        }}
      />

      <WizardInput
        type="email"
        errors={errors}
        label={
          <>
            Email*
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Will be hidden from public</Tooltip>}
            >
                <span>
                  <FontAwesomeIcon icon="question-circle" className="mx-2" />
                </span>
            </OverlayTrigger>
          </>
        }
        name="email"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('email', {
            required: 'Email field is required',
            pattern: {
              value:
                /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
              message: 'Email must be valid'
            }
          })
        }}
      />

      <Row className="g-2 mb-3">
        <WizardInput
          type="password"
          errors={errors}
          label="Password*"
          name="password"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 2,
                message: 'Password must have at least 2 characters'
              }
            })
          }}
        />
        <WizardInput
          type="password"
          errors={errors}
          label="Confirm Password*"
          name="confirmPassword"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('confirmPassword', {
              required: 'Confirm Password field is required',
              validate: value =>
                value === watch('password') || 'The password do not match'
            })
          }}
        />
      </Row>

      <WizardInput
        type="checkbox"
        errors={errors}
        label={
          <>
            I accept the <Link to="#!"> terms</Link> and{' '}
            <Link to="#!"> privacy policy</Link>
          </>
        }
        name="agreedToTerms"
        formControlProps={{
          ...register('agreedToTerms', {
            required: 'You need to agree the terms and privacy policy.'
          })
        }}
      />

      <Divider>or register with</Divider>
      <div className="m-3">
        <SocialAuthButtons />
      </div>
    </>
  );
};

UserAccountForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default UserAccountForm;
