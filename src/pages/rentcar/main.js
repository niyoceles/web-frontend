import React, { useState } from 'react';
import { AppLayout } from '../../layouts';
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

export const RentCar = () => {


	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>RentCar | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//contact' />
				<meta
					name='description'
					content='RentCar Go Discover Africa on the following address: email: ‎+250 791 349 744, email: info@godiscoverafrica.rw '
				/>
			</Helmet>
			<section className='contact bg-light pt-4'>
				<Container>
					<Row>
						<Col sm={5}>
							<h1 className='text-title text-bold mt-3 py-4'>Rent car</h1>
							<p className='mt-4'>
							<br />
								P.O. Box : 4270 Kigali, Rwanda<br />
								Kicukiro KK 366 Street
							</p>
							<p className='mt-4'>
								<i className='fa fa-phone mr-2'></i> ‎+250 791 349 744 <br />
								<i className='fa fa-inbox mr-2'></i> info@godiscoverafrica.rw <br />
							</p>

						</Col>
						<Col sm={7}>
						<Button
											type='submit'
											variant='outline-primary'
											className='mt-3 col-sm-6'
										>
											<i className='fa fa-save'></i> Go to Rent car portal
										</Button>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
