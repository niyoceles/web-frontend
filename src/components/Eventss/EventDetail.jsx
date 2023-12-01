/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import EventsWelcome from "./EventsWelcome";
import { AppLayout } from '../../layouts';
import { useParams } from 'react-router-dom';
import eventData from './eventData';
import ReactHtmlParser from 'react-html-parser';


const EventDetail = ({events}) => {

  // const { id } = props.match.params;

  const { id } = useParams();
  const event = eventData.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }


  return (
    <AppLayout>
    <div className="events-parent">
      <div>
      <div fluid className="bg-light py-4 ">
        <EventsWelcome event={event}/>
        <Container fluid>
      <Row className="animate__animated animate__fadeIn custom-cards">
        
     <Col md={12} className="mb-4">
        <p className='px-5 py-3' >
          {ReactHtmlParser(event.body)}
        </p>
      </Col>
      </Row>
      </Container>
    </div>
      </div>
    </div>
  </AppLayout>
   
  );
};

export default EventDetail;
