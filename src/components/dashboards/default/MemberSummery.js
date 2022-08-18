import React from 'react';
import {
  Button, Card, Col, Row, Table, Form, ProgressBar, Alert, Badge
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FalconCardFooterLink from "../../common/FalconCardFooterLink";
import Member from "../../members/Member";
import Calendar from "../../common/Calendar";

const getMembers = (members, isPositive) => members
  .filter(member => isPositive? member.rating > 0: member.rating <= 0)
  .map(member => ({...member, rating: Math.abs(member.rating)}))
  .sort((m1, m2) => m2.rating - m1.rating );

const MemberSummery = ({members, isPositive}) => {
  const memberList = getMembers(members, isPositive)
  // console.log('Members ', isPositive, memberList)
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
