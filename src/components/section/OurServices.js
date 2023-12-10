import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eventData from '../Eventss/eventData';

export default class OurService extends Component {
  constructor() {
    super();

    this.state = {
      data: eventData,
    };
  }
  render() {
    return (
      <div>
        <Container className='py-3'>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <h1 className='text-title text-bold py-2'>Our services</h1>
            </Col>
          </Row>

          <Row className='pl-3 pr-3'>
            {this.state.data.map((value) => (
              <Col
                sm={4}
                className='guide-box border py-2 background-white-light'
              >
                <h4 className='mb-3 mt-3 text-bold'>{value.title}</h4>

                <p>{value.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
