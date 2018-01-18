import React from 'react'
import { FormControl, Button } from 'react-bootstrap'

const UserForm = (props) => {
	const { user, handleChange, handleSubmit } = props;
	return (
		<div>
		<div><h1>Login Form</h1></div>
			<form onSubmit={handleSubmit}>
				<label>Username : </label><br />
				<FormControl type="text" value={user.name} onChange={handleChange.bind(this, 'name')} placeholder="username" /><br />
				<label>Password : </label><br />
				<FormControl type="password" value={user.password} onChange={handleChange.bind(this, 'password')} placeholder="password" /><br />
				<Button type="submit" bsStyle="success">Login</Button>{' '}
				<Button type="reset" bsStyle="danger">Cancel</Button>
			</form>
		</div>
		)
}

export default UserForm;