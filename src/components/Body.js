import React from 'react'
import {Row, Col, Button, Glyphicons} from 'react-bootstrap'
import Sidebar from './Sidebar';
import Header from './Header'

export default class Body extends React.Component{
render(){
	return(
                	<Row>
                        <Col md={2} className="no-gutter">  
                               <Row>
                                    <Col xs={12}>
                                          <Sidebar />
                                    </Col>
                              </Row>
                        </Col>
                        <Col md={10}>
                              <Row>
                                    <Col xs={12} className="header">
                                          <Header />
                                    </Col>
                              </Row>
                              <Row>
                                    <Col xs={12}>
                                          <div className="page-inner">
                                                <h2 className="page-title">DASHBOARD</h2>
                                                <p style={{padding:'10px'}}><i>This is dummy text , you can replace it with your original text.</i></p>
                                                <hr style={{color:'#3CB371', border:'1px dotted #3CB371'}} />
                                                <Row  style={{marginRight: '10px', marginLeft: '10px',color:'#fff'}}>
                                                      
                                                      <Col md={4}>
                                                            <div className="text-center" style={{borderRadius:10, backgroundColor: '#d36f2e',boxSizing: 'content-box', width: '250px', height: '90px', padding: '30px'}}>
                                                                   <i class="fa fa-bolt fa-5x"></i>
                                                                   <h4>ZERO ISSUES</h4>
                                                             </div>
                                                      </Col>
                                                      <Col md={4}>
                                                            <div className="text-center"  style={{borderRadius:10, backgroundColor: '#8F8F2C', boxSizing: 'content-box', width:250, height:90, padding:30}}>
                                                                  <i class="fa fa-plug fa-5x"></i>
                                                                   <h4>45 TASK IN CHECK</h4>
                                                            </div>   
                                                      </Col>
                                                      <Col md={4}>
                                                            <div className="text-center" style={{borderRadius:10, backgroundColor: '#FF2F71', boxSizing: 'content-box', width: '250px', height: '90px', padding: '30px'}}>
                                                                  <i class="fa fa-dollar fa-5x"></i>
                                                                   <h4>200K PENDING</h4>
                                                            </div>
                                                      </Col>
                                                </Row>
                                          </div>
                                    </Col>
                              </Row>
                              
                        </Col>
                  </Row>      
            
		)
}



}