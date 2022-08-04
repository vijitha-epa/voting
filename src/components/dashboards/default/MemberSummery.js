import React from 'react';
import {
  Button, Card, Col, Row, Table, Form, ProgressBar
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import classNames from 'classnames';

const getMembers = (members, isPositive) => members
  .filter(member => isPositive? member.rating > 0: member.rating <= 0)
  .map(member => isPositive ? member: {...member, rating: Math.abs(member.rating)})
  .sort((m1, m2) => m1.rating > m2.rating );

const getProductItemCalculatedData = (unit, price, totalPrice) => {
  const productTotalPrice = unit * price;
  const percentage = ((productTotalPrice * 100) / totalPrice).toFixed(0);
  return {productTotalPrice, percentage};
};

const Member = ({member, isPositive}) => {
  const {img, name, age, gender, rating, edu_qualifications} = member;

  return (<tr className={classNames({'border-bottom border-200': true})}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <img className="rounded-1 border border-200" src={img} width="60" alt={edu_qualifications} />
          <div className="ms-3">
            <h6 className="mb-1 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {name}
              </Link>
            </h6>
            <p className="fw-semi-bold mb-0 text-500">{gender}</p>
          </div>
        </Flex>
      </td>
      <td className="align-middle text-end fw-semi-bold">
        {age}
      </td>
      <td className="align-middle pe-card">
        <Flex alignItems="center">
          <ProgressBar now={rating * 10} style={{width: '80px', height: 5}} />
          <div className="fw-semi-bold ms-3">{rating}</div>
        </Flex>
      </td>
    </tr>);
};

Member.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    edu_qualifications: PropTypes.array,
    prof_qualifications: PropTypes.array,
    rating: PropTypes.number.isRequired
  }).isRequired
};

const MemberSummery = ({members, isPositive}) => {
  const memberList = getMembers(members, isPositive)
  console.log('Members ', members)
  return (<Card className="h-lg-100">
      <Card.Body className="p-0">
        <Table borderless responsive className="mb-0 fs--1">
          <thead className="bg-light">
          <tr className="text-900">
            <th>Member</th>
            <th className="text-end">Age</th>
            <th className="pe-card text-end" style={{width: '8rem'}}>
              Rating
            </th>
          </tr>
          </thead>
          <tbody>
          {memberList.map((member, index) => (
            <Member
              member={member}
              isPostive={isPositive}
              key={member.id}
            />))}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button variant="falcon-default" size="sm" as={Link} to="#!">
              View All
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>);
};

MemberSummery.propTypes = {
  members: PropTypes.arrayOf(Member.propTypes.product).isRequired,
  isPositive: PropTypes.bool.isRequired
};

export default MemberSummery;
