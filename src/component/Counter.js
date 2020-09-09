import React, {Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={number:0}
    }
    handleReset=()=>{
        this.setState({number:0})
    }
    handleAdd=()=>{
        this.setState({number:this.state.number+1})
    }
    handleSub=()=>{
        this.setState({number:this.state.number-1})
    }
    render(){
        return(
          <div className="center_div">
              <h1>COUNTER</h1>
              <button onClick={this.handleSub}>-</button>
               <span>{this.state.number}</span>
              <button onClick={this.handleAdd}>+</button><br/>
              <button onClick={this.handleReset}>Reset</button>
          </div>
        );
    }
}
export default Counter;