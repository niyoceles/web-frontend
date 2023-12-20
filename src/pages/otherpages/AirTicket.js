import React from 'react';
import { AppLayout } from '../../layouts';
import {
  Container,
  Row,
  Col,
  Button,
  Image,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Quote from '../../../src/assets/assetss/willy-wo-pXnMG0FfSwA-unsplash.jpg';

import './index.css';

export const Airticket = () => {
  return (
    <AppLayout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Airticket | Go Discover Africa</title>
        <link rel='canonical' href='https://godiscoverafrica.rw//contact' />
        <meta
          name='description'
          content='Airticket Go Discover Africa on the following address: email: ‎+250 791 349 744, email: info@godiscoverafrica.rw '
        />
      </Helmet>
      <section className='contact bg-light pt-4'>
        <Container>
          <Row className='justify-content-center'>
            <Col sm={7}>
              <h1 className='text-title text-bold mt-3 py-4'>AirTicket</h1>
              <h4 className='text-title text-bold mt-3 py-4'>Welcome to GoDiscover Africa air ticket services</h4>
              <p className='mt-1'>
                <br />
                We are a full-service travel agency dedicated to providing our clients with personalized travel services that cater to their unique needs and preferences. Our experienced and knowledgeable travel agents are passionate about travel and are committed to making your travel dreams a reality.
                <br />
                <br />
We offer a wide range of travel services, including but not limited to flight bookings, hotel accommodations and car rentals. We work with a variety of reputable travel suppliers to ensure our clients receive the best possible pricing and experiences.

                <br />
                <br/>
                At GoDiscover Africa, we understand that your travel plans may change unexpectedly, which is why we offer flexible cancellation policies on most bookings. We also provide travel insurance options to ensure that you are fully protected and covered in the event of any unforeseen circumstances.
<br/>
<br/>
Customer satisfaction is our top priority, and we strive to provide exceptional service to each and every one of our clients. If you have questions or need assistance with your travel plans, our friendly and knowledgeable customer support team is available to help you.

              </p>
              <h4 className='text-title text-bold mt-3 py-4'>Please contact us:</h4>
              <p className='mt-1'>
                <i className='fa fa-phone mr-2'></i> +250 791 349 744 <br />
                <i className='fa fa-inbox mr-2'></i> info@godiscoverafrica.rw{' '}
                <br />
              </p>
              <p className='py-3'>
              <a href='/ticket' target="_blank" rel="noopener noreferrer" className=''>
              <Button
                type='submit'
                variant='outline-primary'
                className='btn-lg'
              >
                <i className='fa fa-save'></i> Fill the form 
              </Button>
              </a>
              </p>
            </Col>
            <Col
              sm={5}
              className='d-flex align-items-center justify-content-center'
            >
               <Image
										src={Quote}
										className='img-fluid'
										title='image'
										alt='image'
									/>
            
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
