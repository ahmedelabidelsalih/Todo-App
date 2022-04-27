
import { Component } from 'react';
import './App.css';
import Form from './Component/Form';
import Tems from './Component/Tems';

class App extends Component {
  state = {
    inputvalue:``,
    todos:[
     
    ]
  }
  donetask = (index )=>{
    const todos = [...this.state.todos];
    todos.splice(index , 1);
    this.setState({todos})
  }
  addvalue = ()=>{
    const todos = [...this.state.todos];
    todos.push({title :this.state.inputvalue})
    this.setState({todos ,inputvalue:`` })

  }
  change =(e)=>{
    this.setState({inputvalue :  e.target.value })
  }
  render(){
    
  return (
    <>
   
    <div className="App">
      
    <Form value={this.state.inputvalue} onChange={this.change}  onClick={this.addvalue} />
       

        {this.state.todos.map((todo , index) => <Tems todo={todo} donetask={()=>this.donetask(index)}  key={index} />)}
    </div>
    </>
  );
}}

export default App;
