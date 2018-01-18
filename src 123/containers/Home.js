import React from 'react'
import {
	Row,
	Col,
	FormGroup,
	FormControl,
	Radio,
	Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom' 

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			user:{
				email: '',
				password: '',
				first_name: '',
				last_name: '',
				phone_number: '',
				age: '',
				gender: '',
			},
			confirm_password: '',
		}
	}

	onChange = (key, val) => {
		let {user} = this.state
		user[key] = val.target.value
		this.setState({
			user
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		let { user } = this.state
		alert(user.email, user.first_name, user.last_name, user.age, user.phone_number)
	}
	render() {
		const { first_name, last_name, age, phone_number, gender, email, password } = this.state.user
		const { confirm_password } = this.state
		return(
			<div>
				<Row>
					<Col xs={12} style={{paddingTop:'100px'}}>
						
					</Col>
					<Col xs={12}>
						<Row>
							<Col xsOffset={4} xs={4}>
								<Link to="/contact">Contact</Link>
								<Link to="/home">Home</Link>
								<form onSubmit={this.onSubmit}>
									<FormGroup>
										<label>First Name</label>
										<FormControl type="text" value={first_name} placeholder="First Name" onChange={this.onChange.bind(this, 'first_name')} />
									</FormGroup>
									<FormGroup>
										<label>Last Name</label>
										<FormControl type="text" value={last_name} placeholder="Last Name" onChange={this.onChange.bind(this, 'last_name')} />
									</FormGroup>
									<FormGroup>
										<label>Email</label>
										<FormControl type="email" value={email} placeholder="Email" onChange={this.onChange.bind(this, 'email')} />
									</FormGroup>
									<FormGroup>
										<label>Gender</label>
										{' '}
							      <Radio name="gender" inline>
							        Male
							      </Radio>
							      {' '}
							      <Radio name="gender" inline>
							        Female
							      </Radio>
									</FormGroup>
									<FormGroup>
										<label>Age</label>
										<FormControl type="number" value={age} placeholder="age" onChange={this.onChange.bind(this, 'age')} />
									</FormGroup>
									<FormGroup>
										<label>Phone Number</label>
										<FormControl type="number" value={phone_number} placeholder="Phone Number" onChange={this.onChange} />
									</FormGroup>
									<FormGroup>
										<label>Password</label>
										<FormControl type="password" value={password} placeholder="Password" onChange={this.onChange} />
									</FormGroup>
									<FormGroup>
										<label>Confirm Password</label>
										<FormControl type="password" value={confirm_password} placeholder="Confirm Password" onChange={this.onChange} />
									</FormGroup>
									<FormGroup>
										<Button type="submit">Sign Up</Button>
										<Button type="reset">Cancel</Button>
									</FormGroup>
								</form>
							</Col>
						</Row>
					</Col>
					<Col xs={12}>
						
					</Col>
				</Row>
			</div>
		)
	}
}