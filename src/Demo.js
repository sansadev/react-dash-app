import React,{Component} from 'react';
import ReactDom from 'react-dom';
import  './Demo.css';



class Demo extends Component{
  render(){
    return <div className="maindiv_style">
    <h1> hello {this.props.name} </h1>
    <p>welcome to my application</p>
    </div>
  }
}


export default Demo;
