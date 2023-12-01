import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
export class Partner extends Component {
	render() {
		return (
			<section className='pt-block pt-3 pb-3'>
				<h3 className='pb-4 text-center'>Partners</h3>
				<Container fluid className='p-3'>
					<Row>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630148/WEBS/godiscover/rdb_pc8cs9.jpg'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630150/WEBS/godiscover/rtta_xkdojf.png'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630117/WEBS/godiscover/cot_q1mvxg.png'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
