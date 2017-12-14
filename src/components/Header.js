import React from 'react'
import {Row,Col,Glyphicon} from 'react-bootstrap'

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
						<Col md={9} sm={9} xs={9}>
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