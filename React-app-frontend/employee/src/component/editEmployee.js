import React, { Component } from "react";
import { appConfig} from '../appConfig.js';

class EditEmployee extends Component {
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
		    id:this.state.id,
         	user:{
		        name:this.state.name,
		        surname:this.state.surname,
		    },
	        amountInUsd:this.state.amountInUsd,
	        date:this.state.date,
	        currency:this.state.currency
		}
		fetch(`${appConfig.url}/${(this.state.id)}`, {
		  method: 'PUT',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(postData)
		}).then(res => res.json())
			.then(response => alert("Employee has been successfully updated"))
			.catch(error => alert(error));

	};
	handleChange = e => {
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
		console.log(e.target.name,e.target.value,">>onChange")
	};

	componentWillMount(){
		if(this.props.empolyeeDetails){
			this.setState({id:this.props.empolyeeDetails.id,name:this.props.empolyeeDetails.user.name,surname:this.props.empolyeeDetails.user.surname,amountInUsd:this.props.empolyeeDetails.amountInUsd,date:this.props.empolyeeDetails.date,currency:this.props.empolyeeDetails.currency})
		}
	}

	render() {
		console.log(this.props.empolyeeDetails && this.props.empolyeeDetails.length,"url")
		return (
			(this.props.empolyeeDetails && this.props.empolyeeDetails.id) ?
			<div className="EditEmployee">
				<h3> Edit Employee Employee </h3>
				<form onSubmit={this.handleSubmit}>
					<div>
				        <label>
				          Name:
				          <input type="text" name="name" defaultValue={this.props.empolyeeDetails.user.name} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Surname:
				          <input type="text" name="surname" defaultValue={this.props.empolyeeDetails.user.surname} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Amount:
				          <input type="number" name="amountInUsd" defaultValue={this.props.empolyeeDetails.amountInUsd} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
				        <label>
				          Date:
				          <input type="text" placeholder="dd/mm/yyyy" name="date" defaultValue={this.props.empolyeeDetails.date} onChange={this.handleChange} />
				        </label>
				    </div>
				    <div>
						<label> Currency </label>
						<select defaultValue={this.props.empolyeeDetails.currency} name="currency" onChange={this.handleChange}>
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
			:<p>Not able to fetch employee details.</p>
		);
	}
}


export default EditEmployee;
