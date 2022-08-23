import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// BillingForm.js
const UserVerificationForm = ({ register, errors, setValue }) => {
  return (
    <>
      <Row className="g-2 mb-3 fs--1 mb-0 text-warning">
        {/*<span className="fs--1 mb-0 ">*/}
          Please enter verification codes has sent to your email and mobile no
        {/*</span>*/}
      </Row>
      <Row className="g-2 mb-3">
        <WizardInput
          type="number"
          errors={errors}
          label="Mobile Verification Code *"
          name="phoneCode"
          placeholder="••••"
          formGroupProps={{ as: Col, sm: 12 }}
          formControlProps={{
            className: 'input-spin-none',
            ...register('phoneCode', {
              required: 'Please Enter phone verification code'
            })
          }}
        />
        {/*<WizardInput*/}
        {/*  errors={errors}*/}
        {/*  label="Name on Card*"*/}
        {/*  name="nameOnCard"*/}
        {/*  placeholder="John Doe"*/}
        {/*  formGroupProps={{ as: Col, sm: 6 }}*/}
        {/*  formControlProps={{*/}
        {/*    ...register('nameOnCard', {*/}
        {/*      required: 'Name on card is requred'*/}
        {/*    })*/}
        {/*  }}*/}
        {/*/>*/}
      </Row>

      <Row className="g-2 mb-3">

        <WizardInput
          type="number"
          name="emailCode"
          label="Email verification code *"
          placeholder="1234"
          errors={errors}
          formGroupProps={{ as: Col, sm: 12 }}
          formControlProps={{
            className: 'input-spin-none',
            ...register('emailCode', {
              required: 'Please Enter email verification code'
            })
          }}
        />
      </Row>
    </>
  );
};

UserVerificationForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default UserVerificationForm;
