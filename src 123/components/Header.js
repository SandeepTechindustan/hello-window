import React from 'react'
import { Row, Col, Glyphicon, Carousel} from 'react-bootstrap'

export default class Header extends React.Component {
	render() {
		console.log(this.props)
		return (
			<Row>

				<Col md={12} className="bg-dblue">
					<Row>
						<Col md={3} xs={3} sm={3}>
							<div className="padding-10">
								<img src="http://www.cornetindia.com/images/about_01.jpg" alt={this.props.header.title} />
							</div>
						</Col>
						<Col xs={12} sm={10} md={6}>
							<Carousel>
								<Carousel.Item>
									<img width={500} height={200} alt="900x500" src="http://images6.fanpop.com/image/photos/34100000/Steroline-AU-Stefan-spontaneously-surprises-Caroline-with-flowers-stefan-and-caroline-34193636-500-200.gif" />
									<Carousel.Caption>

									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={500} height={200} alt="500x500" src="http://fashionwtf.com/wp-content/uploads/2017/11/43-Fabulous-3D-Dual-Monitor-Images.jpg" />
									<Carousel.Caption>

									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={500} height={200} alt="500x500" src="https://i.pinimg.com/originals/83/1f/26/831f2696fa16146b6856985bc15d844b.gif" />
									<Carousel.Caption>
									
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
						<Col md={3} sm={3} xs={3}>
							<div className="padding-10">
								<span className="text-right"><h4>Site Map <Glyphicon glyph="road"/></h4></span>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
					)
	}
}