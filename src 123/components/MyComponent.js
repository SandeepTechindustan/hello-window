import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Grid, Row, Col } from 'react-bootstrap'

export default class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			header:{
				title: 'Cornet Technology India',
			},
			sidebar: {
				name: '',
				age: '',
			},
			footer: 'This is Footer component',
			body: 'This is the body'
		}

	}
	render() {
		return (
			<div className="container-fluid">
					<Row>
						<Col md={12}>
							<Header header={this.state.header} />
						</Col>
					</Row>
					<Row>
						<Col md={3} sm={3} xs={3} style={{backgroundColor: '#1f2733', color:'#fff', height: '500px'}}>
							<Sidebar sidebar={this.state.sidebar} />
						</Col>
						<Col md={9} sm={9} xs={9}style={{backgroundColor:'lightblue', height: '500px'}}>	
							<Body body={this.state.body} />
						</Col>
					</Row>
					<Row>
						<Col md={12} sm={12} xs={12} style={{backgroundColor:'#1f2733',color: 'white',padding:'5px'}}>
							<Footer footer={this.state.footer} />
						</Col>
					</Row>
			</div>
		)
	}
}