import React from 'react';
import 'dotenv/config';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GalaDinner } from '../../components/section';

import './index.css';
// const { REACT_APP_ABOUT_VIDEO } = process.env;
export const About = () => {
	const boards = [
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
	
	
	];
	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>About | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//about' />
				<meta
					name='description'
					content='Go Discover Africa'
				/>
			</Helmet>
			<section className='st-about-head' id={'who-we-are'}>
				<br />
				<br />
				<Container>
					<Row>
						<Col lg={12}>
							<p className='text-center head-title'>About us</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>who we are</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>
							GoDiscover Africa is a premium Tours and Travel company with its headquarters in Kigali Rwanda and company representatives in Nairobi, Kenya operating inbound and outbound tours within the region and Africa as a whole.
 <br/>
 <br/>
 <br/>
We specialize in creating exceptional tourism experiences and our service is anchored on the root mandate which is to cater for all our client travel expectations by developing and facilitating tourism packages that offer adventure, mystery, tranquility, excitement, education and most important safety.
<br/>
<br/>
We invite you to come to join the exciting GoDiscover Africa adventure as we spread our wings across the continent of Africa with our professional tour operators who will guide you in discovering the mystery of the African continent, explore our detailed packages and itineraries which lead you to pre-arranged adventures or request for customized adventures and we will develop one for you that meets all your requirements. Discover our beautiful continent by partnering with GoDiscover Africa- we will take you there in comfort and style
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>Mission</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>	
							GoDiscover Africa undertakes to provide our valued clients with top range exclusive service and end to end travel solutions right from airport pickups, transportation, accommodations, tours and all other aspects of your travel to ensure your peace and your comfort
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>Vision</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>
							
To become a preferable and leading safaris company in East Africa by offering the best tours and travel and related activities at the most competitive price and providing quality services.
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>Values</p>
						</Col>
						<Col lg={8}>
							<p className='about-description'>
								<ul>
									<li className='about-description'>
									Respect for all
									</li>
									<li className='about-description'>
Honest
									</li>
									<li className='about-description'>
Knowledge
									</li>
									<li className='about-description'>

Integrity
									</li>
								</ul>
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			<section
				className='st-about-body pt-2 background-white'
				id={'team'}
			>
				<Container className=''>
					<Row className='st-about-team pt-3'>
						<Container>
							<Row>
								<Col sm={12}>
									<p className='title text-center text-light'>Our Team</p>
								</Col>
							</Row>
							<Row className='mt-0 pt-1'>
								{boards &&
									boards.map(index => (
										<Col sm={3} className='mt-3 py-4'>
											<Image
												alt={index.names}
												title={index.names}
												src={index.image}
												className='img-fluid'
											/>
											<p className='h2 font-weight-bold text-light mt-4 text-center mb-0'>
												{index.names}
											</p>
											<p className='text-center text-light'>
												<span className='text-center text-white'>{index.role}</span>
											</p>
										</Col>
									))}
							</Row>
						</Container>
					</Row>
				</Container>
			</section>
			<GalaDinner />
		</AppLayout>
	);
};
