import React from 'react'

export default class Body extends React.Component {
	render() {
		console.log(this.props)
		return (

			<div>
				{this.props.body}
			</div>
			)
	}
}