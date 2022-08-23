import classNames from 'classnames';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import React, { useState } from 'react';
import {
  Accordion,
  Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Modal, Nav, ProgressBar, Row, Table
} from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
import Rating from "react-rating";
import { CloseButton } from "../common/Toast";
import Member from "./Member";
import MemberModal from "./MemberModal";

export const getColorByRating = (number) => {
  if (number > 80) return 'bg-plus-80'
  if (number > 50) return 'bg-plus-50'
  if (number > 25) return 'bg-plus-25'
  if (number > 0) return 'bg-plus-00'
  if (number > -25) return 'bg-minus-25'
  if (number > -50) return 'bg-minus-50'
  if (number > -80) return 'bg-minus-75'
  return 'bg-minus-end'
}


const MembersRow = ({member, isLast, openMemberDetailModal, index}) => {

  const {id, img, name, age, gender, edu_qualifications, prof_qualifications, rating, total_votes, rating_history} = member
  const bgColor = getColorByRating(rating * 10)

  console.log("In Member raw ", rating, bgColor)
  return (
    // <>
    <tr className={classNames({'border-bottom border-200': !isLast})} key={id}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <Avatar
            className={`status-online`} // status-offline, status-away
            size="4xl"
            src={img}
            width="60"
            alt={name}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semi-bold">
              {index === 3 &&
                <NavLink
                  end={false}
                  to={"/authentication/user/modal"}
                  state={{ open: true }}
                  className={({ isActive }) =>
                    isActive ? 'active nav-link stretched-link' : 'nav-link stretched-link'
                  }>
                  {/*<Button variant='falcon-default' onClick={() => openMemberDetailModal(index)}*/}
                  {/*        className='me-2 mb-1 stretched-link'>*/}
                  {name}

                  {/*</Button>*/}
                  {/*<NavbarVerticalMenuItem route={route} />*/}
                </NavLink>
              }
              {index !== 3 &&
                <Button variant='falcon-default' onClick={() => openMemberDetailModal(index)}
                      className='me-2 mb-1 stretched-link'>
                {name}
              </Button>
              }

              {/*<Button variant='falcon-default' onClick={() => openMemberDetailModal(index)}*/}
              {/*        className='me-2 mb-1 stretched-link'>*/}
              {/*  {name}*/}
              {/*</Button>*/}
            </h6>
            {/*<p className = "fw-semi-bold mb-0 text-500">*/}
            <Badge bg={gender === 'm' ? "primary" : 'warning'} className="m-lg-3">
              {gender === 'm'? "Male": "Female"}
            </Badge>
            <SoftBadge bg={"secondary"}>
              {age}
            </SoftBadge>
            {/*</p>*/}

            {/*<p className="fs--2 mb-0 text-500">{gender}/{age}</p>*/}
          </div>
        </Flex>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        {edu_qualifications.map((ed, index) => <SoftBadge pill className={"me-2"} bg={"primary"} key={index}>
          {ed}
        </SoftBadge>)}

      </td>
      <td className="align-middle text-center fw-semi-bold">
        {prof_qualifications.map((pro, index) => <SoftBadge pill className={"me-2"} bg={"primary"} key={index}>
          {pro}
        </SoftBadge>)}

        {/*<p className="fs--2 mb-0">{10}</p>*/}
      </td>
      <td className="align-middle">
        <Row className="g-2 justify-content-center">
          <Col xs="auto">
            <SoftBadge className={"me-2 " + bgColor}>
              {rating * 10}%
            </SoftBadge>
            <SoftBadge pill bg={"primary"}>
              by {total_votes} votes
            </SoftBadge>
            <Flex alignItems="center">
              <Rating initialRating={Math.abs(rating)} fractions={2} readonly stop={10}
                      className="hint--bottom hint--bounce" aria-label="Current rating"
                      emptySymbol={<FontAwesomeIcon icon={['far', 'star']} className="text-warning" />}
                      placeholderSymbol={<FontAwesomeIcon icon="star" className="text-danger" />}
                      fullSymbol={<FontAwesomeIcon icon="star" className="text-warning" />}
              />
              {/*<ProgressBar now={Math.abs(rating) * 10} style={{width: '80px', height: 5}} variant={rating > 0? 'info': 'warning'} />*/}
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
                color: getColor('primary'), tooltip: {show: false}, series: [{
                  data: rating_history
                }]
              }}
              className="mb-1"
              style={{width: '10.625rem', height: '1rem'}}
            />
          </Col>
        </Row>
      </td>
    </tr>
    // </>
  );
};

const MemberList = () => {


  const [memberList] = useState(members)
  const [curMember, setCurMember] = useState(memberList[1])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  // const [prevIndex, setPrevIndex] = useState(0)
  const [curIndex, setCurIndex] = useState(1)
  // const [nextIndex, setNextIndex] = useState(2)
  // console.log("Members ", memberList)

  const openMemberDetailModal = (index) => {
    console.log('Member index ', index)
      setCurMember(members[index])
      setShowModal(true)

      setCurIndex(index)
    // } else {
    //   navigate('/authentication/user/modal');
    // }

  }

  const loadNextMember = (newIndex) => {
      setCurIndex(newIndex)
      setCurMember(members[newIndex])
  }

  console.log("Rendering ", curIndex, members.length)
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <SimpleBarReact>
          <Table borderless className="mb-0 fs--1 border-200 rounded-3 table-dashboard table-member-info">
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
            {memberList.map((member, index) => (
              <MembersRow member={member}
                          isLast={index === memberList.length - 1}
                          openMemberDetailModal={openMemberDetailModal}
                          index={index}
                          key={index}
              />))}
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
            <FalconLink title="View All" className="px-0" to="/authentication/user/modal"/>
            <Nav.Item as="li" key="Register" onClick={() => console.log("Registering")}>
              <NavLink
                end={false}
                to={"/authentication/user/modal"}
                state={{ open: true }}
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }
              >Register
                {/*<NavbarVerticalMenuItem route={route} />*/}
              </NavLink>
            </Nav.Item>
          </Col>
        </Row>
      </Card.Footer>
      {showModal &&
        <MemberModal member={curMember} show={showModal} showModal={setShowModal} moveToMember={loadNextMember}
                     noOfMembers={members.length} curIndex={curIndex}/>
      }
    </Card>
  )
};

MembersRow.propTypes = {
  member: Member.propTypes.member,
  isLast: PropTypes.bool,
  openMemberDetailModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default MemberList;
