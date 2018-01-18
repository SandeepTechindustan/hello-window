import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'


export default class Header extends React.Component{
render(){
	return(
    <Row>
      <Col md={12}>
        <div className="buttonset" style={{float: 'right', padding:10, paddingRight:50}}>
          <Button bsSize="lg" bsStyle="info">30 <span className="glyphicon glyphicon-envelope"></span></Button>{' '}
          <Button bsSize="lg" bsStyle="primary">40 <span className="glyphicon glyphicon-th-list" ></span></Button>{' '}
          <Button bsSize="lg" bsStyle="danger"><span className="glyphicon glyphicon-exclamation-sign"></span></Button>
        </div>
      </Col>
    </Row>      
            
		)
}



}