import React, { useState } from 'react';
import { AppLayout } from '../../layouts';
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ResponsiveEmbed,
  Form,
  Alert,
  Button,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Loading from '../../utils/Loading';

import './index.css';

export const Accommodation = () => {
  const bookmeUrl = 'https://bookme.rw/';
  return (
    <AppLayout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Accommodation | Go Discover Africa</title>
        <link rel='canonical' href='https://godiscoverafrica.rw//contact' />
        <meta
          name='description'
          content='Accommodation Go Discover Africa on the following address: email: ‎+250 791 349 744, email: info@godiscoverafrica.rw '
        />
      </Helmet>
      <section className='contact bg-light pt-4'>
        <Container>
          <Row className='justify-content-center'>
            <Col sm={7}>
              <h1 className='text-title text-bold mt-3 py-4'>Accommation</h1>
              <p className='mt-4'>
                <br />
                Discover a home away from home! Our cozy accommodations provide comfort and convenience for your stay. Whether you're traveling for business or leisure, our well-appointed spaces offer a perfect blend of style and functionality. Book your stay with us and experience hospitality at its finest. 
                <br />– Welcome to your new home on the road!
              </p>
              <p className='mt-4'>
                <i className='fa fa-phone mr-2'></i> ‎+250 791 349 744 <br />
                <i className='fa fa-inbox mr-2'></i> info@godiscoverafrica.rw{' '}
                <br />
              </p>
            </Col>
            <Col
              sm={5}
              className='d-flex align-items-center justify-content-center'
            >
            <a href={bookmeUrl} target="_blank" rel="noopener noreferrer" className=''>
              <Button
                type='submit'
                variant='outline-primary'
                className='btn-lg'
              >
                <i className='fa fa-save'></i> Go to Bookme portal
              </Button>
            </a>
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
