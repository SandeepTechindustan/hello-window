import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserForm from './UserForm'
import BookForm from './BookForm'
import { Route } from 'react-router-dom'
import About from './About'

export default class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: {
				name: '',
				password: ''
			},
			book: {
				name: '',
				author: '',
				pages: ''
			}
		}
	}

	handleChange = (key, val) => {
		let { user } = this.state
		user[key] = val.target.value
		this.setState({ user })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		alert(this.state.user.name=="" || this.state.user.password == "" ? "please enter full credentials!":`username is ${this.state.user.name} and password is ${this.state.user.password}`)
	}

	handleChangeBook = (key, val) => {
		let { book } = this.state
		book[key] = val.target.value
		this.setState({ book })
	}

	handleSubmitBook = (e) => {
		e.preventDefault()
		alert(this.state.book.name=="" || this.state.book.author == "" || this.state.book.pages=="" ? "please enter full book detail!":`book name is ${this.state.book.name} and author name is ${this.state.book.author} and no of pages are ${this.state.book.pages}`)
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.body}
				<Row>
					<Col xs={4}>
						<UserForm
							user={this.state.user}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
					</Col>
					<Col xs={4}>
						<BookForm
							book={this.state.book}
							handleChangeBook={this.handleChangeBook}
							handleSubmitBook={this.handleSubmitBook}
						/>
					</Col>
					<Col xs={4}></Col>
				</Row>
			</div>
			)
	}
}