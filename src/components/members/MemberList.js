import classNames from 'classnames';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import React, { useState } from 'react';
import { Card, Col, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SoftBadge from 'components/common/SoftBadge';
import PropTypes from 'prop-types';
import BasicECharts from 'components/common/BasicEChart';

import * as echarts from 'echarts/core';
import { getColor } from 'helpers/utils';
import FalconLink from 'components/common/FalconLink';
import SimpleBarReact from 'simplebar-react';
import { membersInfo } from "../../data/dashboard/projectManagement";
import { members } from "../../data/dashboard/default";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import product10 from "../../assets/img/products/10.png";
import team1 from "../../assets/img/team/1.jpg";
import './Members.css'

const getColorByRating = (number) => {
  if(number > 80)
    return 'bg-plus-80'
  if(number > 50)
    return 'bg-plus-50'
  if(number > 25)
    return 'bg-plus-25'
  if(number > 0)
    return 'bg-plus-00'
  if(number > -25)
    return 'bg-minus-25'
  if(number > -50)
    return 'bg-minus-50'
  if(number > -80)
    return 'bg-minus-75'
  return 'bg-minus-end'
}

const MembersRow = ({
  id,
  img,
  name,
  age,
  gender,
  edu_qualifications,
  prof_qualifications,
  rating,
  total_votes,
  rating_history,
  isLast
}) => {
  const bgColor = getColorByRating(rating * 10)
  console.log("BG Color ", name, bgColor)
  return (
    <tr className={classNames({ 'border-bottom border-200': !isLast })}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <Avatar
            className={`status-online`} // status-offline, status-away
            size="2xl"
            src={img}
            width="60"
            alt={name}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {name} <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </Link>
            </h6>
            <p className="fw-semi-bold mb-0 text-500">{gender}/{age}
              <FontAwesomeIcon icon="star-half-alt"  />
            </p>
            {/*<p className="fs--2 mb-0 text-500">{gender}/{age}</p>*/}
          </div>
        </Flex>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        <SoftBadge pill bg={"primary"}>
          {edu_qualifications[0]}
        </SoftBadge>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        <SoftBadge pill bg={"primary"}>
          {prof_qualifications[0]}
        </SoftBadge>
        {/*<p className="fs--2 mb-0">{10}</p>*/}
      </td>
      <td className="align-middle">
        <Row className="g-2 justify-content-center">
          <Col xs="auto">
            <SoftBadge pill className={"mb-2 " + bgColor }>
              {rating * 10}%
            </SoftBadge>
            <SoftBadge pill bg={"primary"}>
              by {total_votes} votes
            </SoftBadge>
            <Flex alignItems="center">
              <ProgressBar now={Math.abs(rating) * 10} style={{width: '80px', height: 5}} variant={rating > 0? 'info': 'warning'} />
            </Flex>
            {/*<p className="fs--2 mb-0">{'1h:52m'}</p>*/}
          </Col>
        </Row>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        <Row className="g-2 justify-content-center">
          <Col xs="auto" className="mt-auto">
            <BasicECharts
              echarts={echarts}
              options={{
                color: getColor('primary'),
                tooltip: {show: false},
                series: [{
                  data: rating_history
                }]
              }}
              className="mb-1"
              style={{width: '3.625rem', height: '1rem'}}
            />
          </Col>
        </Row>
      </td>
    </tr>
  );
};

const MemberList = () => {

  const [data] = useState(membersInfo)
  const [memberList] = useState(members)
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <SimpleBarReact>
          <Table
            borderless
            className="mb-0 fs--1 border-200 rounded-3 table-dashboard table-member-info"
          >
            <thead className="bg-light">
              <tr className="text-900">
                <th>Member info</th>
                <th className="text-center">Educational Qualifications</th>
                <th className="text-center">Professional Qualifications</th>
                <th className="text-center">Rating</th>
                <th className="text-center">History</th>
              </tr>
            </thead>
            <tbody>
              {memberList.map((info, index) => (
                <MembersRow
                  {...info}
                  isLast={index === data.length - 1}
                  key={info.id}
                />
              ))}
            </tbody>
          </Table>
        </SimpleBarReact>
      </Card.Body>

      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="View All" className="px-0" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

MembersRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  edu_qualifications: PropTypes.array.isRequired,
  prof_qualifications: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  total_votes: PropTypes.number.isRequired,
  rating_history: PropTypes.array.isRequired
};

// MemberList.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default MemberList;
