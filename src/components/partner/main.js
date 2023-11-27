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
								src='../../assets/assetss/rdb.jpeg'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='../../assets/assetss/rtta.png'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='../../assets/assetss/cot.png'
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
