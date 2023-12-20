/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { AppLayout } from '../../layouts';
import {
	Container,
	Row,
	Col,
	ResponsiveEmbed,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { sendContactEmail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';
import { ContactForm } from './ContactForm';

export const Contact = () => {
	const [validated, setValidated] = useState(false);
	const [user, setUser] = useState({
		names: '',
		email: '',
		subject: '',
		message: '',
	});
	const loading = useSelector(state => state.contact.contactData);
	const contactFailed = useSelector(state => state.contact.contactFailure);

	const dispatch = useDispatch();

	const handleChange = e => {
		const { name, value } = e.target;
		setUser(user => ({ ...user, [name]: value }));
	};

	const handleSubmit = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		e.preventDefault();
		setValidated(true);
		if (user.email && user.message) {
			dispatch(sendContactEmail(user));
		}
		if (!loading && contactFailed === null) {
			setTimeout(function () {
				setUser({
					names: '',
					email: '',
					subject: '',
					message: '',
				});
				setValidated(false);
			}, 1500);
		}
	};

	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Contact | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//contact' />
				<meta
					name='description'
					content='Contact Go Discover Africa on the following address: email: +250 791 349 744, email: info@godiscoverafrica.rw '
				/>
			</Helmet>
			<section className='contact bg-light pt-4'>
				<Container>
					<Row>
						<Col sm={5}>
							<h1 className='text-title text-bold mt-3 py-4'>Contact us</h1>
							<p className='mt-4'>
							<br />
								P.O. Box : 4270 Kigali, Rwanda<br />
								Kicukiro KK 366 Street
							</p>
							<p className='mt-4'>
								<i className='fa fa-phone mr-2'></i> +250 791 349 744 <br />
								<i className='fa fa-inbox mr-2'></i> info@godiscoverafrica.rw <br />
							</p>

						</Col>
						<Col sm={7}>
							<ContactForm/>
						</Col>
					</Row>

					<Row className='mt-5'>
						<Col sm={12}>
							<ResponsiveEmbed aspectRatio='16by9'>
							<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15949.79002985189!2d30.1072021!3d-1.9752916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca736cdf65d67%3A0x46ea187ff265ebe1!2sGoDiscover%20Africa%20Ltd!5e0!3m2!1sen!2srw!4v1703686577031!5m2!1sen!2srw"
							width="600"
							height="450"
							style={{ border: '0' }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Maps Embed"
							></iframe>
								{/* <embed src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63799.99735817496!2d30.103524999999998!3d-1.9533690000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc76b5e00aaa31b51!2sM%26M%20Plaza!5e0!3m2!1sen!2srw!4v1605274623851!5m2!1sen!2srw' /> */}
							</ResponsiveEmbed>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
