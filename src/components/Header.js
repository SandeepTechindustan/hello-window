import React from 'react'

export default class Header extends React.Component {
	render() {
		console.log(this.props)
		return (

			<div>
				{this.props.header}
			</div>
			)
	}
}