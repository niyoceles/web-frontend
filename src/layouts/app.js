import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBarPage from "../pagess/navPage/NavBarPage";
import "./index.css";
import { Footer } from "../components/footer";
import ScrollToTop from "react-scroll-to-top";
import { getPublications } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RightBar } from "../components/section";

export const AppLayout = (props) => {
  const [publicationOpen, setPublicationOpen] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publications = useSelector(
    (state) => state.publicationReducer.publications,
  );
  // const error = useSelector(state => state.publicationReducer.error);

  const dispatch = useDispatch();
  const isPublicationPage = window.location.pathname.includes("/publications");

  const firstPublication =
    publications &&
    publications.find(
      (publication) =>
        publication.status === true && publication.category === "publication",
    );

  useEffect(() => {
    dispatch(getPublications());
  }, [dispatch]);

  const togglePublication = () => {
    setPublicationOpen(!publicationOpen);
  };

  return (
    <div className="home-styles">
      {/* <div
				className='top-bar-navbar'
				style={{ backgroundColor: 'red', color: '#fff' }}
			>
				<Container className='py-2'>
					<Row>
						<Col lg={8} xs={7} sm={7}>
							<div className='contact-top'>
								<a
									href='mailto:info@godiscoverafrica.rw'
									className='p-2 email-info'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='info@godiscoverafrica.rw'
								>
									<i className='fa fa-envelope mr-1'></i> info@godiscoverafrica.rw
								</a>
								<a
									href='tel:+250788332220'
									className='p-2 tel'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='‎+250 791 349 744'
								>
									<i className='fa fa-phone mr-1'></i> ‎+250 791 349 744
								</a>
							</div>
						</Col>

						<Col lg={4} xs={5} sm={5}>
							<div className='social-top float-right'>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Facebook'
								>
									<i className='fab fa-facebook'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Twitter'
								>
									<i className='fab fa-twitter'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Instagram'
								>
									<i className='fab fa-instagram'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Linkedin'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div> */}
      <ScrollToTop smooth color="#fff" style={{ backgroundColor: "#186645" }} />
      <NavBarPage />

      {!isPublicationPage && (
        <div
          className="publication"
          style={{
            backgroundColor: "white",
            position: "fixed",
            width: "350px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            zIndex: "1000",
            marginTop: "180px",
            right: "0",
            transition: "transform 0.3s ease-in-out",
            transform: publicationOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-square"
            viewBox="0 0 16 16"
			      onClick={togglePublication}
			      style={{cursor: "pointer"}}
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
          <RightBar tweet={true} news={true} />
        </div>
        
      )}
      <main>{props.children}</main>
      {/* <Partner /> */}
      <Footer />
    </div>
  );
};
