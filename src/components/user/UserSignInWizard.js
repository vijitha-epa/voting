import React from 'react';
import PropTypes from 'prop-types';
import UserSignInLayout from './UserSignInLayout';
import AuthWizardProvider from "../wizard/AuthWizardProvider";

const UserSignInWizard = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <UserSignInLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

UserSignInWizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default UserSignInWizard;
