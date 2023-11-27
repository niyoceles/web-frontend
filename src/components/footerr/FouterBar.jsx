import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import icca from "../../assets/assetss/icca-logo.png";
import crn from "../../assets/assetss/crn-logo.png";
import av from "../../assets/assetss/av-logo.png";
import rwanda from "../../assets/assetss/official-logo.svg";
import "./index.css";

const FouterBar = () => {
  return (
    <Container className="footer" fluid>
      <Row className="text-light">
        <Col md={4}>
          <div className="p-4 footer-element">
            <h3 className="text-light">Contact Us</h3>
            <p className="text-light">Email: info@rwandaevents@gmail.com</p>
            <p className="text-light">Phone: +250 788 647 871</p>
            <p className="text-light">PO BOX 88</p>
            <p className="text-light">Kigali Rwanda</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 footer-element">
            <h3 className="text-light">Sign Up</h3>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              accusantium deleniti nisi.
            </p>
            <Alert variant="danger" className="mt-3 w-50 h-50">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Change this and that and try again. Duis mollis.</p>
            </Alert>
            <div>
              <Row className="footer-row d-sm-flex border-bottom">
                <Col md={3} sm={12} className="mb-3">
                  <img src={icca} alt="" className="imgs" />
                </Col>
                <Col md={3} xs={12} className="mb-3">
                  <img src={crn} alt="" className="imgs" />
                </Col>
                <Col md={3} xs={12} className="mb-3">
                  <img src={av} alt="" className="imgs" />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 d-flex justify-content-start m-auto ">
            <img src={rwanda} alt="" className="event-rwanda" />
          </div>
          <p className="text-light">
            {" "}
            &copy; COPYRIGHT RWANDA-EVENTS BY HDDESIGN{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FouterBar;
