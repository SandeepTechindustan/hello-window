import React from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
	render() {
		console.log(this.props)

		const {sidebar} = this.props

		return (

			<div>
				{sidebar.name}<br />
				{sidebar.age}

				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/about" >about</Link>
				</div>
				<div>
					<a href="" >contact</a>
				</div>
				<div>
					<a href="" >privacy policy</a>
				</div>
				<div>
					<a href="" >site map</a>
				</div>
			</div>
			)
	}
}