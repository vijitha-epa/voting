import { Accordion, Button, Card, CloseButton, Col, Modal, Nav, Row, Table } from "react-bootstrap";
import Flex from "../common/Flex";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicECharts from "../common/BasicEChart";
import * as echarts from "echarts/core";
import { getColor } from "../../helpers/utils";
import SoftBadge from "../common/SoftBadge";
import React from "react";
import PropTypes from "prop-types";
import Member from "./Member";

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

const MemberModal = ({member, show, showModal, prevMember, nextMember}) => {
  console.log("In Modal ", show, member)
  const {id, description, img, name, age, edu_qualifications, prof_qualifications, rating, rating_history, total_votes} = member
  return (
    <Modal show={show} size="lg" fullscreen={"lg-down"} onHide={() => showModal(false)}>
      <Modal.Header>
        <Modal.Title>Member Details</Modal.Title>
        <CloseButton
          className="btn btn-circle btn-sm transition-base p-0"
          onClick={() => showModal(false)}
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
                        <tr className="hover-actions-trigger" key={index}>
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
                        <tr className="hover-actions-trigger" key={index}>
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
        <Button variant="secondary" onClick={() => showModal(false)}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>

  )

}

MemberModal.propTypes = {
  member: Member.propTypes.member,
  // isPositive: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  prevMember: PropTypes.number,
  nextMember: PropTypes.number
};

export default MemberModal