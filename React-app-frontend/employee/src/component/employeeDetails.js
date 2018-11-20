import React, { Component } from "react";

class EmployeeDetails extends Component {

	render() {
		console.log(this.props.empolyeeDetails && this.props.empolyeeDetails,"empolyeeDetails")
		return (
			(this.props.empolyeeDetails && this.props.empolyeeDetails.id) ?
			<div className="empolyee-list">
				<h3>Employee Details </h3>	
				<div className="col-md-6">
					<label>User Id:</label><span>{this.props.empolyeeDetails.id}</span>
				</div>
				<div className="col-md-6">
					<label>User Name:</label><span>{this.props.empolyeeDetails.user.name}</span>
				</div>
				<div className="col-md-6">
					<label>User Surname:</label><span>{this.props.empolyeeDetails.user.surname}</span>
				</div>
				<div className="col-md-6">
					<label>Date:</label><span>{this.props.empolyeeDetails.date}</span>
				</div>
				<div className="col-md-6">
					<label>Amount:</label><span>{this.props.empolyeeDetails.amountInUsd}</span>
				</div>
				<div className="col-md-6">
					<label>Currency:</label><span>{this.props.empolyeeDetails.currency}</span>
				</div>

			</div>
			:<p>Not able to fetch employee details.</p>
		);
	}
}


export default EmployeeDetails;
