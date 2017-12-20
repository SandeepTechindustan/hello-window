import React from 'react'
import { FormControl, Button } from 'react-bootstrap'

const BookForm = (props) => {
	const { book, handleChangeBook, handleSubmitBook } = props;
	return (
		<div>
		<div><h1>Book Form</h1></div>
			<form onSubmit={handleSubmitBook}>
				<label>Book Name : </label><br />
				<FormControl type="text" value={book.name} onChange={handleChangeBook.bind(this, 'name')} placeholder="bookname" /><br />
				<label>Author Name : </label><br />
				<FormControl type="text" value={book.author} onChange={handleChangeBook.bind(this, 'author')} placeholder="author name" /><br />
				<label>Pages : </label><br />
				<FormControl type="number" value={book.pages} onChange={handleChangeBook.bind(this, 'pages')} placeholder="no of pages" /><br />
				<Button type="submit" bsStyle="success">Login</Button>{' '}
				<Button type="reset" bsStyle="danger">Cancel</Button>
			</form>
		</div>
		)
}

export default BookForm;