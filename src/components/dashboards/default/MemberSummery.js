import React from 'react';
import {
  Button, Card, Col, Row, Table, Form, ProgressBar, Alert, Badge
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import Avatar from "../../common/Avatar";
import FalconCardFooterLink from "../../common/FalconCardFooterLink";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getMembers = (members, isPositive) => members
  .filter(member => isPositive? member.rating > 0: member.rating <= 0)
  .map(member => ({...member, rating: Math.abs(member.rating)}))
  .sort((m1, m2) => m2.rating - m1.rating );

const Member = ({member, isPositive}) => {
  const {img, name, age, gender, rating, avatar, edu_qualifications, total_votes} = member;
  console.log('isPositive', rating)
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
    id: PropTypes.oneOfType([PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.object,
    age: PropTypes.number.isRequired,
    edu_qualifications: PropTypes.array,
    prof_qualifications: PropTypes.array,
    rating: PropTypes.number.isRequired,
    total_votes: PropTypes.number.isRequired,
  }).isRequired,
  isPositive: PropTypes.bool.isRequired,
};

const MemberSummery = ({members, isPositive}) => {
  const memberList = getMembers(members, isPositive)
  console.log('Members ', isPositive, memberList)
  return (<Card className="h-lg-100">
      <Card.Body className="p-0">
        <Table borderless responsive className="mb-0 fs--1">
          <thead className="bg-light">
          <tr className={(isPositive? " text-success bg-soft-success": " text-danger bg-soft-danger")}>
            <th>Most {isPositive? 'loved': 'hated'} Members</th>
            <th className="text-end">Votes</th>
            <th className="pe-card text-end" style={{width: '8rem'}}>
              Rating
            </th>
          </tr>
          </thead>
          <tbody>
          {memberList.map((member, index) => (
            <Member member={member} isPositive={isPositive} key={member.id} />))}
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
            <FalconCardFooterLink
              title="View All"
              to="/member/memberList"
              size="sm"
            />
            {/*<Button variant="falcon-default" size="sm" as={Link} to="#!">*/}
            {/*  View All*/}
            {/*</Button>*/}
          </Col>
        </Row>
      </Card.Footer>
    </Card>);
};

MemberSummery.propTypes = {
  members: PropTypes.arrayOf(Member.propTypes.member).isRequired,
  isPositive: PropTypes.bool.isRequired
};

export default MemberSummery;
