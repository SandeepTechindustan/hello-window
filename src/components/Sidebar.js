import React from 'react'
import {Row, Col, Button, Glyphicons, Nav} from 'react-bootstrap'


export default class Sidebar extends React.Component{
render(){
	return(
  <div>
    <Row>
      <Col xs={12} className="title text-center">
        <p>CORNET</p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="userPanel"></Col>
    </Row>
    <Row>
      <Col xs={12} className="no-gutter">
        <Nav className="nav">
          <li style={{backgroundColor:'#00CA79'}}>Dashboard</li>
          <li>Dashboard 1</li>
          <li>Dashboard 2</li>
          <li>Dashboard 3</li>
          <li>Dashboard 4</li>
        </Nav>
      </Col>
    </Row>
  </div>      
		)
}



}