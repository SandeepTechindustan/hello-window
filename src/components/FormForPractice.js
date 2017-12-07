import React from 'react'
import { FormGroup, FormControl, Button, Grid, Row, Col} from 'react-bootstrap'

export default function FormForPractice() {
	return (
		<Grid className="bg-black container">
			<Row>
				<Col md={4}>
				</Col>
				<Col md={4}>
				<h1>Form</h1>
					<form>
						<FormGroup>
							<FormControl type="text"/>
							<FormControl type="text"/>
							<br />
							<Row>
								<Col style={{'textAlign':'center', 'backgroundColor':'white'}} md={6}><Button bsStyle="success">Submit</Button></Col>
								<Col style={{'textAlign':'center', 'backgroundColor':'black'}} md={6}><Button bsStyle="danger" block>Cancel</Button></Col>
							</Row>
						</FormGroup>
					</form>
				</Col>
				<Col md={4}></Col>
			</Row>
		</Grid>
		)
}