import React from "react";
import { Col, Row, Card, Button, Carousel } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import intern001 from "../../assets/assetss/international-001.jpeg";
import intern002 from "../../assets/assetss/internation-002.jpeg";
import intern003 from "../../assets/assetss/international-003.jpeg";
import event from "../../assets/assetss/godiscover.jpeg";
import animal001 from "../../assets/assetss/Akagera-Hippos.jpg";
import animal002 from "../../assets/assetss/Akagera-zebra.jpg";
import animal003 from "../../assets/assetss/giraffe.jpg";
import { AppLayout } from "../../layouts";
import HomePage from "../../pagess/HomePage";
import "./index.css";
import "animate.css";
import TrackVisibility from 'react-on-screen';

const HomeBody = () => {
  const sponsorLogos = Array(12).fill(event);
  return (
    <AppLayout>
      <div className="bg-light py-3 home-container">
        <Carousel className="h-80 bg-dark " fade>
          <Carousel.Item interval={1500} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={animal001} alt="" className="carousel-image" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">First slide label</h3>
              <p className="text-light">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={animal002} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">
                Second slide label
              </h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={animal003} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">Third slide label</h3>
              <p className="text-light">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="w-100 px-5 py-3 danger text-light">
          <Row>
            <Col sm={12} md={6}>
              <h1 className="text-light font-weight-bold ">Why It's Worth It</h1>
              <p className="px-18 text-light">
              Most tourists skip through Kigali on their way to go gorilla trekking in other parts of Rwanda or nearby Uganda, but if you have the time, Kigali is an incredible, vibrant, and beautiful city known as the Singapore of Africa. With a thriving arts scene and social conscience that includes the banning of plastic bags and monthly community city cleanups, Kigali is leading the way for many other cities in Africa and, indeed, around the world. —Helen Davies
              </p>
            </Col>
            <Col sm={12} md={6}>
              <iframe
                src="https://www.youtube.com/watch?v=EPCKma4e37Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              ></iframe>
            </Col>
          </Row>
        </div>
        <div className="px-5">
        <TrackVisibility>
            {({ isVisible }) => (
          <Row className={`${isVisible ? "animate__animated animate__fadeIn text-[10px]": ""}events-card`}>
            <Col sm={12} md={3}>
              <Card className="ev-1">
                <Card.Body>
                  <Card.Title>Events</Card.Title>
                  <Card.Subtitle className="mb-2">Consultancy</Card.Subtitle>
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-2">
                <Card.Body>
                  <Card.Title>Event</Card.Title>
                  <Card.Subtitle className="mb-2">Production</Card.Subtitle>
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-3">
                <Card.Body>
                  <Card.Title>Rental</Card.Title>
                  <Card.Subtitle className="mb-2">Services</Card.Subtitle>
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-4">
                <Card.Body>
                  <Card.Title>Destination</Card.Title>
                  <Card.Subtitle className="mb-2">
                    Management System
                  </Card.Subtitle>
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          )}
          </TrackVisibility>
          <div>
            <h1 className="py-3">Blogs</h1>
            <Row className={`border-bottom pb-5 blogs`}>
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <Col key={index}>
                    <Card className="blog-card">
                      <Card.Img
                        variant="top"
                        src={animal001}
                        className="blog-image"
                      />
                      <Card.Body>
                        <Card.Title>
                          {index === 0
                            ? "Second International Conference on Public Health in Africa"
                            : index === 1
                            ? "The 17th IGF: Resilient Internet for a Shared Sustainable and Common Future"
                            : "Rwanda Tourism Week: Adopting innovative approaches to boost intra-africa travel as a drive for tourism business recovery"}
                        </Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeBody;
