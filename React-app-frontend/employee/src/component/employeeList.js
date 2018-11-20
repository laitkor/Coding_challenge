import React, { Component } from "react";
import { appConfig} from '../appConfig.js';

class EmployeeList extends Component {
	constructor(props){
    super(props);
	    this.state={
	      empolyee:[]

	    }
	this.getList = this.getList.bind(this)
	}

	getList(){
		fetch(appConfig.url, {
			  method: 'GET', // or 'PUT'
			  headers:{
			    'Content-Type': 'application/json'
			  }
			}).then(res => res.json())
			.then(response => this.setState({empolyee:response}))
			.catch(error => console.log(error));

	}
	componentWillMount(){
	    this.getList()
	}

	handleDelete = (id) => (e) =>{
		console.log(id,"handleDelete >> id",appConfig.url)
		 fetch(`${appConfig.url}/${(id)}`, {
	        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
	        mode: "cors", // no-cors, cors, *same-origin
	        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	        credentials: "same-origin", // include, *same-origin, omit
	        headers: {
	            "Content-Type": "application/json; charset=utf-8"
	        },
	        redirect: "follow", // manual, *follow, error
	        referrer: "no-referrer", // no-referrer, *client
	        body: JSON.stringify({id:id}), // body data type must match "Content-Type" header
	    })
    .then(response => response.json())
		.then(response => {alert("Employee details has been successfully deleted");
			this.getList()})
		.catch(error => console.log(error));
	}


	render() {
		let employeeRow
		if (this.state.empolyee.length > 0){
	      employeeRow = this.state.empolyee.map((user, index) =>
	        <tr key={index}>
	        	<td>{user.user.name}</td>
	        	<td>{user.user.surname}</td>
	            <td>{user.amountInUsd}</td>
	            <td>{user.currency}</td>
	            <td>{user.date}</td>
	            <td>
	            	<input type="button" onClick={this.props.handleView(user.id)} value="View" /> 
              		&nbsp;
              		<input type="button" onClick={this.props.handleEdit(user.id)} value="Edit" />
              		&nbsp;
              		<input type="button" onClick={this.handleDelete(user.id)} value="Delete" />
	            </td>
	        </tr> 
	      );
	    }
		console.log(this.state.empolyee.length ,"employee length")
		return (
			this.state.empolyee.length > 0 ?
			<div className="empolyee-list">
				<h3>List of Employee </h3>
				 <table style={{width:'100%'}}>
				  <tr>
				    <th>Name</th>
				    <th>Surname</th>
				    <th>Amount</th>
				    <th>Currency</th>
				    <th>Date</th>
				    <th>Action</th>
				  </tr>
				  <tbody>
                 	{employeeRow}
                  </tbody>
				</table> 
			</div>
			:<p>Not able to fetch employee list.</p>
		);
	}
}


export default EmployeeList;
