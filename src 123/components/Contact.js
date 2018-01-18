import React from 'react'
import {
	Row, 
	Col, 
	FormGroup, 
	FormControl, 
	Button, 
	Radio,
	Modal
} from 'react-bootstrap'

export default class Contact extends React.Component {
	constructor(props){
		super(props);

		this.state={
			userform:{
			fname:'',
			email:'',
			phone:'',
			mgs:''
		},
		myModalStatus:false,
	}
}
onChange=(key, val)=>{
let {userform}=this.state
userform[key]=val.target.value
this.setState({userform})
}

handlesubmit=(e)=>{
	console.log(this.state)
e.preventDefault();
alert("Message Submitted")
}

closeModal = () => {
	this.setState({
		myModalStatus:false
	})
}

openModal = () => {
	this.setState({
		myModalStatus:true
	})
}

render() {
console.log(this.props);
return(
	<div>
		<Row>
			<Col mdOffset={4} smOffset={4} sm={4} xs={12} md={4}>
				<Button onClick={this.openModal}>Contact Us</Button>
				<Modal show={this.state.myModalStatus} >
					<Row>
						<Col xs={8} xsOffset={2}>
 					<MyModal 
						closeModal={this.closeModal}
						userform={this.state.userform}
						handlesubmit={this.handlesubmit}
						onChange={this.onChange}
					/>
					</Col>
					</Row>
				</Modal>
			</Col>
			<Col md={4}></Col>
		</Row>
	</div>
		)
	}
}

const MyModal = (props) => {
	const { closeModal } = props;
	const { fname, email, phone, mgs, handlesubmit, onChange } = props;
	return (
		<div>
			<Modal.Header>
				<h1>Contact Us</h1>
			</Modal.Header>
			<Modal.Body>
				<form onSubmit={handlesubmit}>
					<FormGroup>
						<label>Name </label>
						<FormControl type="text" value={fname} onChange={onChange.bind(this , 'fname')}/>
					</FormGroup>
					<FormGroup>
						<label>Email</label>
						<FormControl type="text" value={email} onChange={onChange.bind(this , 'email')}/>
					</FormGroup>
					<FormGroup>
						<label>Phone NO</label>
						<FormControl type="Number" value={phone} onChange={onChange.bind(this , 'phone')}/>
					</FormGroup>
					<FormGroup>
						<label>Message</label>
						<FormControl componentClass="textarea" value={mgs} onChange={onChange.bind(this , 'mgs')}/>
					</FormGroup>
					
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button type="submit" onClick={handlesubmit} bsStyle="success">Submit</Button>{' '}
					<Button type="reset" bsStyle="danger" onClick={closeModal}> Cancel</Button>
			</Modal.Footer>
		</div>
		)
}