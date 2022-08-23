import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import FalconDropzone from 'components/common/FalconDropzone';
import avatarImg from 'assets/img/team/avatar.png';
import { isIterableArray } from 'helpers/utils';
import Avatar from 'components/common/Avatar';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import { AuthWizardContext } from 'context/Context';
import Flex from 'components/common/Flex';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// PersonalForm.js
const UserPersonalForm = ({ register, errors, setValue }) => {
  const { user } = useContext(AuthWizardContext);
  const [avatar, setAvatar] = useState([
    ...(user.avater ? user.avater : []),
    { src: avatarImg }
  ]);

  return (
    <>
      <Row className="mb-3 hint--bottom hint--bounce" aria-label="Upload a 300x300 jpg image with a maximum size of 400KB">
        <Col md="auto">
          <Avatar
            size="4xl"
            src={
              isIterableArray(avatar) ? avatar[0]?.base64 || avatar[0]?.src : ''
            }
          />
        </Col>
        <Col md>
          <FalconDropzone
            files={avatar}
            onChange={files => {
              setAvatar(files);
              setValue('avatar', files);
            }}
            multiple={false}
            accept="image/*"
            placeholder={
              <>
                <Flex justifyContent="center">
                  <img src={cloudUpload} alt="" width={25} className="me-2" />
                  <p className="fs-0 mb-0 text-700">
                    Upload your profile picture
                  </p>
                </Flex>
                {/*<p className="mb-0 w-75 mx-auto text-400">*/}
                {/*  Upload a 300x300 jpg image with a maximum size of 400KB*/}
                {/*</p>*/}
              </>
            }
          />
        </Col>
      </Row>
    <Row className="g-2 mb-3">
      <WizardInput
        type="select"
        label={
            <>
                Gender
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
        // label="Gender"
        name="gender"
        placeholder="Select gender..."
        errors={errors}
        options={['Male', 'Female', 'Other']}
        // formGroupProps={{
        //   className: 'mb-3'
        // }}
        formControlProps={{
          ...register('gender')
        }}

        formGroupProps={{ as: Col, sm: 6 }}
      />

      <WizardInput
        type="select"
        name="country"
        label={
            <>
                Country*
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
        // label="Country"
        errors={errors}
        placeholder="Select your country"
        options={[
          'Afghanistan',
          'Albania',
          'Algeria',
          'American Samoa',
          'Andorra',
          'Angola',
          'Anguilla',
          'Antarctica',
          'Antigua and Barbuda',
          'Argentina',
          'Armenia',
          'Aruba',
          'Australia',
          'Austria',
          'Azerbaijan',
          'Bahamas',
          'Bahrain',
          'Bangladesh',
          'Barbados',
          'Belarus',
          'Belgium',
          'Belize',
          'Benin',
          'Bermuda',
          'Bhutan',
          'Bolivia',
          'Bosnia and Herzegowina',
          'Botswana',
          'Bouvet Island',
          'Brazil',
          'British Indian Ocean Territory',
          'Brunei Darussalam',
          'Bulgaria',
          'Burkina Faso',
          'Burundi',
          'Cambodia',
          'Cameroon',
          'Canada',
          'Cape Verde',
          'Cayman Islands',
          'Central African Republic',
          'Chad',
          'Chile',
          'China',
          'Christmas Island',
          'Cocos (Keeling) Islands',
          'Colombia',
          'Comoros',
          'Congo',
          'Congo, the Democratic Republic of the',
          'Cook Islands',
          'Costa Rica',
          "Cote d'Ivoire",
          'Croatia (Hrvatska)',
          'Cuba',
          'Cyprus',
          'Czech Republic',
          'Denmark',
          'Djibouti',
          'Dominica',
          'Dominican Republic',
          'East Timor',
          'Ecuador',
          'Egypt',
          'El Salvador',
          'Equatorial Guinea',
          'Eritrea',
          'Estonia',
          'Ethiopia',
          'Falkland Islands (Malvinas)',
          'Faroe Islands',
          'Fiji',
          'Finland',
          'France',
          'France Metropolitan',
          'French Guiana',
          'French Polynesia',
          'French Southern Territories',
          'Gabon',
          'Gambia',
          'Georgia',
          'Germany',
          'Ghana',
          'Gibraltar',
          'Greece',
          'Greenland',
          'Grenada',
          'Guadeloupe',
          'Guam',
          'Guatemala',
          'Guinea',
          'Guinea-Bissau',
          'Guyana',
          'Haiti',
          'Heard and Mc Donald Islands',
          'Holy See (Vatican City State)',
          'Honduras',
          'Hong Kong',
          'Hungary',
          'Iceland',
          'India',
          'Indonesia',
          'Iran (Islamic Republic of)',
          'Iraq',
          'Ireland',
          'Israel',
          'Italy',
          'Jamaica',
          'Japan',
          'Jordan',
          'Kazakhstan',
          'Kenya',
          'Kiribati',
          "Korea, Democratic People's Republic of",
          'Korea, Republic of',
          'Kuwait',
          'Kyrgyzstan',
          "Lao, People's Democratic Republic",
          'Latvia',
          'Lebanon',
          'Lesotho',
          'Liberia',
          'Libyan Arab Jamahiriya',
          'Liechtenstein',
          'Lithuania',
          'Luxembourg',
          'Macau',
          'Macedonia, The Former Yugoslav Republic of',
          'Madagascar',
          'Malawi',
          'Malaysia',
          'Maldives',
          'Mali',
          'Malta',
          'Marshall Islands',
          'Martinique',
          'Mauritania',
          'Mauritius',
          'Mayotte',
          'Mexico',
          'Micronesia, Federated States of',
          'Moldova, Republic of',
          'Monaco',
          'Mongolia',
          'Montserrat',
          'Morocco',
          'Mozambique',
          'Myanmar',
          'Namibia',
          'Nauru',
          'Nepal',
          'Netherlands',
          'Netherlands Antilles',
          'New Caledonia',
          'New Zealand',
          'Nicaragua',
          'Niger',
          'Nigeria',
          'Niue',
          'Norfolk Island',
          'Northern Mariana Islands',
          'Norway',
          'Oman',
          'Pakistan',
          'Palau',
          'Panama',
          'Papua New Guinea',
          'Paraguay',
          'Peru',
          'Philippines',
          'Pitcairn',
          'Poland',
          'Portugal',
          'Puerto Rico',
          'Qatar',
          'Reunion',
          'Romania',
          'Russian Federation',
          'Rwanda',
          'Saint Kitts and Nevis',
          'Saint Lucia',
          'Saint Vincent and the Grenadines',
          'Samoa',
          'San Marino',
          'Sao Tome and Principe',
          'Saudi Arabia',
          'Senegal',
          'Seychelles',
          'Sierra Leone',
          'Singapore',
          'Slovakia (Slovak Republic)',
          'Slovenia',
          'Solomon Islands',
          'Somalia',
          'South Africa',
          'South Georgia and the South Sandwich Islands',
          'Spain',
          'Sri Lanka',
          'St. Helena',
          'St. Pierre and Miquelon',
          'Sudan',
          'Suriname',
          'Svalbard and Jan Mayen Islands',
          'Swaziland',
          'Sweden',
          'Switzerland',
          'Syrian Arab Republic',
          'Taiwan, Province of China',
          'Tajikistan',
          'Tanzania, United Republic of',
          'Thailand',
          'Togo',
          'Tokelau',
          'Tonga',
          'Trinidad and Tobago',
          'Tunisia',
          'Turkey',
          'Turkmenistan',
          'Turks and Caicos Islands',
          'Tuvalu',
          'Uganda',
          'Ukraine',
          'United Arab Emirates',
          'United Kingdom',
          'United States',
          'United States Minor Outlying Islands',
          'Uruguay',
          'Uzbekistan',
          'Vanuatu',
          'Venezuela',
          'Vietnam',
          'Virgin Islands (British)',
          'Virgin Islands (U.S.)',
          'Wallis and Futuna Islands',
          'Western Sahara',
          'Yemen',
          'Yugoslavia',
          'Zambia',
          'Zimbabwe'
        ]}
        formGroupProps={{ as: Col, sm: 6 }}
        formControlProps={{
          ...register('country', {
            required: 'Select a country'
          })
        }}
      />
    </Row>
      <WizardInput
        type="number"
        label={
            <>
                Phone*
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
        // label="Phone"
        name="phone"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          className: 'input-spin-none',
          ...register('phone', {required: 'Phone no is required'})
        }}
      />

      <WizardInput
        type="date"
        label={
            <>
                Date of Birth
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
        // label="Date of Birth"
        name="birthDate"
        errors={errors}
        setValue={setValue}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          placeholder: 'Date of Birth',
          ...register('birthDate')
        }}
      />

      <WizardInput
        // type="textarea"
        label={
            <>
                Address
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
        // label="Address"
        name="address"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          ...register('address')
        }}
      />
    </>
  );
};

UserPersonalForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default UserPersonalForm;
