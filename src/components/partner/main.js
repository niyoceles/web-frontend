import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
export class Partner extends Component {
	render() {
		return (
			<section className='pt-block pt-3 pb-3'>
				<h3 className='pb-4 text-center'>Partners</h3>
				<Container fluid className='p-3'>
					<Row className='py-3'>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630148/WEBS/godiscover/rdb_pc8cs9.jpg'
								title='Logo'
								alt='Image'
								className='img-fluid'
								// style={{ height: '150px' }}
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630150/WEBS/godiscover/rtta_xkdojf.png'
								title='Logo'
								alt='Image'
								style={{ height: '150px' }}
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1701630117/WEBS/godiscover/cot_q1mvxg.png'
								title='Logo'
								alt='Image'
								style={{ height: '150px' }}
								className='img-fluid'
							/>
						</Col>
					
						
					</Row>

					<Row className='py-3'>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1703687134/WEBS/rha_b1oj74.png'
								title='Logo'
								alt='Image'
								style={{ height: '150px' }}
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1703687246/WEBS/lgo_xw74f8.png'
								title='Logo'
								alt='Image'
								style={{ backgroundColor: 'black' }}
								className='img-fluid bg-black'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1703687246/WEBS/rata_npbtit.png'
								title='Logo'
								alt='Image'
								style={{ height: '150px' }}
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/dfsai53mw/image/upload/v1703687603/WEBS/rsga_c3yrpt.png'
								title='Logo'
								alt='Image'
								style={{ height: '150px' }}
								className='img-fluid'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
