import React from 'react'

export default class Sidebar extends React.Component {
	render() {
		console.log(this.props)

		const {sidebar} = this.props

		return (

			<div>
				{sidebar.name}<br />
				{sidebar.age}
			</div>
			)
	}
}