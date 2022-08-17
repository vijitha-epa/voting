import classNames from 'classnames';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import React, { useState } from 'react';
import {
  Accordion,
  Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Modal, Nav, ProgressBar, Row, Table
} from 'react-bootstrap';
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
import Rating from "react-rating";
import { CloseButton } from "../common/Toast";

const getColorByRating = (number) => {
  if (number > 80) return 'bg-plus-80'
  if (number > 50) return 'bg-plus-50'
  if (number > 25) return 'bg-plus-25'
  if (number > 0) return 'bg-plus-00'
  if (number > -25) return 'bg-minus-25'
  if (number > -50) return 'bg-minus-50'
  if (number > -80) return 'bg-minus-75'
  return 'bg-minus-end'
}

const Actions = () => (
  <div className="end-0 top-50 pe-3 translate-middle-y hover-actions">
    <Button variant="light" size="sm" className="border-300 me-1 text-600 hint--left hint--bounce" aria-label="Download evidence">
      <FontAwesomeIcon icon="file-alt" style={{color: 'dodgerblue'}}/>
    </Button>
    {/*<Button variant="light" size="sm" className="border-300 text-600">*/}
    {/*  <FontAwesomeIcon icon="trash-alt" />*/}
    {/*</Button>*/}
  </div>
);

const MembersRow = ({
                      id,
                      description,
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
  // const [memberId, setMemberId] = useState(id)
  const [show, setShow] = useState(false)

  console.log("BG Color ", id, gender, gender === 'm')
  return (<>


      <tr className={classNames({'border-bottom border-200': !isLast})}>
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
                {/*<Link className="text-dark stretched-link" to={"member/memberDetails/" + id} key={id}>*/}
                {/*<Badge bg={"secondary"} onClick={() => setShow(true)}>{name}</Badge>*/}
                <Button variant='falcon-default' onClick={() => setShow(true)} className='me-2 mb-1 stretched-link'>
                  {/*<Badge bg={"light"} onClick={() => setShow(true)}>*/}
                  {name}
                  {/*</Badge>*/}
                </Button>
                {/*</Link>*/}
              </h6>
              {/*<p className = "fw-semi-bold mb-0 text-500">*/}
              <Badge bg={gender === 'm' ? "primary" : 'warning'}>
                {gender}
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
              <Badge className={"me-2 " + bgColor}>
                {rating * 10}%
              </Badge>
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

      <Modal show={show} size="lg" fullscreen={"lg-down"} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Member Details</Modal.Title>
          <CloseButton
            className="btn btn-circle btn-sm transition-base p-0"
            onClick={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <Row className="g-0 flex-between-center">
            <Col md="auto">
              <Card bg={"light"} text={"dark"} style={{width: '23.5rem'}}>
                <Card.Img src={img} variant='top' />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                  {/*<Row className="g-2 justify-content-around">*/}
                  {/*  <Col xs="auto">*/}
                  <Flex alignItems="center">
                    <Rating initialRating={Math.abs(rating)} readonly stop={10}
                            className="hint--bottom hint--bounce" aria-label="Current rating"
                            emptySymbol={<FontAwesomeIcon icon={['far', 'star']} className="text-warning" />}
                            placeholderSymbol={<FontAwesomeIcon icon="star" className="text-danger" />}
                            fullSymbol={<FontAwesomeIcon icon="star" className="text-warning" />}
                    />
                  </Flex>
                  {/*  </Col>*/}
                  {/*</Row>*/}
                </Card.Body>
                {/*<ListGroup className="list-group-flush">*/}
                {/*  <ListGroupItem onClick={() => console.log("Clicked ss")}><a href="#">Educational*/}
                {/*    Qualification</a></ListGroupItem>*/}
                {/*  <ListGroupItem onClick={() => console.log("Clicked ss")}><a href="#">Professional*/}
                {/*    Qualifications</a></ListGroupItem>*/}
                {/*  <ListGroupItem onClick={() => console.log("Clicked ss")}><a href="#">Black marks</a></ListGroupItem>*/}
                {/*  <ListGroupItem onClick={() => console.log("Clicked ss")}><a href="#">Rating</a></ListGroupItem>*/}
                {/*  <ListGroupItem onClick={() => console.log("Clicked ss")}><a href="#">Reviews</a></ListGroupItem>*/}
                {/*  <Card.Body>*/}
                {/*    <Card.Link href="#">{"< Prev Member 1"}</Card.Link>*/}
                {/*    <Card.Link className={"text-start"} href="#">{"Next Member 3 >"}</Card.Link>*/}
                {/*  </Card.Body>*/}
                {/*</ListGroup>*/}

                <Row className="g-2 justify-content-around hint--bottom hint--bounce" aria-label="Rating History">
                  <Col xs="auto">
                    <BasicECharts
                      echarts={echarts}
                      options={{
                        color: getColor('primary'), tooltip: {show: false}, series: [{
                          data: rating_history
                        }]
                      }}
                      className="mb-1"
                      style={{width: '20.625rem', height: '3rem'}}
                    />
                  </Col>
                </Row>
              </Card>

            </Col>
            <Col md="auto">
              <Card style={{width: '23.5rem'}}>
                {/*<Card.Body>*/}
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Educational Qualifications</Accordion.Header>
                      <Accordion.Body>
                        {edu_qualifications.map((ed, index) =>
                          <SoftBadge pill className={"me-2"} bg={"primary"} key={index}>
                          {ed}
                        </SoftBadge>)}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Professional Qualifications</Accordion.Header>
                      <Accordion.Body>
                        {prof_qualifications.map((pro, index) => <SoftBadge pill className={"me-2"} bg={"primary"} key={index}>
                          {pro}
                        </SoftBadge>)}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>praises</Accordion.Header>
                      <Accordion.Body>
                        <Table hover responsive>
                          {/*<thead>*/}
                          {/*<tr>*/}
                          {/*  <th scope="col">Name</th>*/}
                          {/*  <th scope="col">Email</th>*/}
                          {/*  <th scope="col"></th>*/}
                          {/*</tr>*/}
                          {/*</thead>*/}
                          <tbody>
                          {['Is a good boy', 'was the master in the class'].map((pro, index) =>
                          <tr className="hover-actions-trigger">
                            <td>{pro}</td>
                            <td className="w-auto">
                              <Actions />
                            </td>
                          </tr>
                            )}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>condemn</Accordion.Header>
                      <Accordion.Body>
                        <Table hover responsive>
                          <tbody>
                          {['In jail for 4 years', 'famous liquor seller', 'Money laundry'].map((pro, index) =>
                            <tr className="hover-actions-trigger">
                              <td>{pro}</td>
                              <td className="w-auto">
                                <Actions />
                              </td>
                            </tr>
                          )}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Reviews</Accordion.Header>
                      <Accordion.Body>
                        {prof_qualifications.map((pro, index) => <SoftBadge pill className={"me-2"} bg={"primary"} key={index}>
                          {pro}
                        </SoftBadge>)}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </Card>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Nav className="justify-content-start" onSelect={(selectedKey) => console.log('selected ' + selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="prev">{"<Previous Member"}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="next">{"Next Member>"}</Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>*/}
            {/*  <Nav.Link eventKey="disabled" disabled>*/}
            {/*    Disabled*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}
          </Nav>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>);
};

const MemberList = () => {

  const [memberList] = useState(members)
  // console.log("Members ", memberList)
  return (<Card className="h-100">
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
            {memberList.map((member, index) => (<MembersRow
                {...member}
                isLast={index === memberList.length - 1}
                key={member.id}
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
            <FalconLink title="View All" className="px-0" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>)
  // };
};

MembersRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  edu_qualifications: PropTypes.array.isRequired,
  prof_qualifications: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  total_votes: PropTypes.number.isRequired,
  rating_history: PropTypes.array.isRequired,
};

// MemberList.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default MemberList;
