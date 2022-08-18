import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import classNames from "classnames";
import Flex from "../common/Flex";
import Avatar from "../common/Avatar";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Member = ({member, isPositive}) => {
  const {img, name, age, gender, rating, edu_qualifications, total_votes} = member;
  return (
    <tr className={classNames({'border-bottom border-200': true})}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <Avatar src={img} className={`status-online`} alt={edu_qualifications[0]} width="40" size="3xl"/>
          {/*<img className="rounded-1 border border-200" src={img} width="60" alt={edu_qualifications[0]} />*/}
          <div className="ms-3 hint--bottom hint--bounce" aria-label="Name, Gender and Age">
            <h6 className="mb-1 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {name}
              </Link>
            </h6>
            <p className="fw-semi-bold mb-0 text-500">{gender}/{age}</p>
          </div>
        </Flex>
      </td>
      <td className="align-middle text-end fw-semi-bold">
        {total_votes}
      </td>
      <td className="align-middle pe-card">
        <Flex alignItems="center">
          <Rating initialRating={rating} fractions={2} readonly stop={10} className="hint--bottom hint--bounce" aria-label="Current rating"
                  emptySymbol={<FontAwesomeIcon icon={['far','star']} className="text-warning" />}
                  placeholderSymbol={<FontAwesomeIcon icon="star" className="text-danger" />}
                  fullSymbol={<FontAwesomeIcon icon="star" className="text-warning" />}
          />
          {/*<ProgressBar now={rating * 10} style={{width: '80px', height: 5}} variant={isPositive? 'info': 'warning'} />*/}

          <div className="fw-semi-bold ms-3">{rating * 10}%</div>
        </Flex>
      </td>
    </tr>);
};

Member.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    edu_qualifications: PropTypes.array,
    prof_qualifications: PropTypes.array,
    rating: PropTypes.number.isRequired,
    total_votes: PropTypes.number.isRequired,
    rating_history: PropTypes.array.isRequired,
  }).isRequired,
  isPositive: PropTypes.bool.isRequired,
};

export default Member;
