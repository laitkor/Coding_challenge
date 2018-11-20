import React, { Component } from "react";
import uuid from "uuid";
import { appConfig} from '../appConfig.js';

class Add extends Component {
	constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      surname:'',
      amountInUsd:'',
      date:'',
      currency:'0'

    }
  }
	handleSubmit = e => {
		e.preventDefault();
		const postData ={
			id:uuid.v4(),
         	user:{
		        name:this.state.name,
		        surname:this.state.surname,
		    },
	        amountInUsd:this.state.amountInUsd,
	        date:this.state.date,
	        currency:this.state.currency
		}
		console.log(postData)
		fetch(`${appConfig.url}`, {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(postData)
		}).then(res => res.json())
			.then(response => alert("Employee has been successfully"))
			.catch(error => alert(error));

	};
	handleChange = e => {
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
		console.log(e.target.name,e.target.value,">>onChange")
	};

	render() {
		console.log(appConfig.url,"url")
		return (
			<div className="add">
				<h3> Add Employee </h3>
				<form onSubmit={this.handleSubmit}>
					<div>
				        <label>
				          Name:
				          <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Surname:
				          <input type="text" name="surname" defaultValue={this.state.surname} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Amount:
				          <input type="number" name="amountInUsd" defaultValue={this.state.amountInUsd} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Date:
				          <input type="text" placeholder="dd/mm/yyyy" name="date" defaultValue={this.state.date} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
						<label> Currency </label>
						<select defaultValue={this.state.currency} name="currency" onChange={this.handleChange}>
							<option key='0' value='0'>
								Select currency
							</option>
							<option key='1' value='dollar'>
								Dollar
							</option>
							<option key='2' value='pound'>
								Pound
							</option>
						</select>
					</div>
					<input type="submit" value="Submit" />
			    </form>
			</div>
		);
	}
}


export default Add;
