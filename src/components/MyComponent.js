import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Sidebar from './Sidebar'

import { Grid, Row, Col } from 'react-bootstrap'

export default class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			header: 'This is header Component',
			sidebar: {
				name: 'Vinod',
				age: 29
			},
			footer: 'This is Footer component',
			body: 'This is the body'
		}

	}
	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col md={4} style={{backgroundColor: '#000', color:'#fff', height:'100vh'}}>
							<Sidebar sidebar={this.state.sidebar} />
						</Col>
						<Col md={8}>
							<Row>
								<Col md={12} style={{height:'80px', backgroundColor:'orange'}}>
									<Header header={this.state.header} />
								</Col>
							</Row>
							<Row>
								<Col md={12} style={{height: '84vh',backgroundColor:'lightblue'}}>	
									<Body body={this.state.body} />
								</Col>	
							</Row>
							<Row>
								<Col md={12} style={{backgroundColor:'orange'}}>
									<Footer footer={this.state.footer} />
								</Col>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
			)
	}
}