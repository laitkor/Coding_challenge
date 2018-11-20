import React, { Component } from 'react';
import './App.css';
import Add from './component/add.js';
import EmployeeList from './component/employeeList.js';
import EmployeeDetails from './component/employeeDetails.js';
import { appConfig} from './appConfig.js';
import EditEmployee from './component/editEmployee.js'

class App extends Component {
	constructor(props){
    super(props);
	    this.state={
	      empolyeeDetails:{},
	      showView:false,
	      showEdit:false,
	      showAdd:false

	    }
	}

	handleView = (id) => (e) =>{
		console.log(id,"handleView >> id")
		fetch(`${appConfig.url}/${(id)}`, {
		  method: 'GET', // or 'PUT'
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.then(response => this.setState({empolyeeDetails:response, showView:true}))
		.catch(error => console.log(error));
	}

	handleEdit = (id) => (e) =>{
		console.log(id,"handleEdit >> id")
		fetch(`${appConfig.url}/${(id)}`, {
		  method: 'GET', // or 'PUT'
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.then(response => this.setState({empolyeeDetails:response, showEdit:true}))
		.catch(error => console.log(error));
	}

	handleAdd = (e) =>{
		e.preventDefault()
		this.setState({showAdd:true})
	}
	handleList = (e) =>{
		e.preventDefault()
		this.setState({showAdd:false,showEdit:false,showView:false})
	}
  render() {
  	console.log(appConfig.url,"appConfig url")
    return (
      <div className="App">
        <header className="App-header">
         Employee
        </header>
        {(this.state.showAdd || this.state.showEdit || this.state.showView) ?
        <input type="button" onClick={this.handleList} value="Employee List" />
        :<input type="button" onClick={this.handleAdd} value="Add Employee" />
        }
        {this.state.showAdd &&
        	<Add/>
        }
        {(!this.state.showAdd && !this.state.showView && !this.state.showEdit) &&
	        <EmployeeList 
	        handleView={this.handleView}
	        handleEdit={this.handleEdit}/>
    	}
        {(this.state.empolyeeDetails && this.state.showView) &&
	        <EmployeeDetails
	        empolyeeDetails={this.state.empolyeeDetails}/>
	    }
        {(this.state.empolyeeDetails && this.state.showEdit) &&
	        <EditEmployee
	        empolyeeDetails={this.state.empolyeeDetails}/>
	    }
      </div>
    );
  }
}

export default App;
