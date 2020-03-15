import React from 'react';
import LoginControl from "./otherPart"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock/>
        <ActionLink/>
        <Toggle/>
      </header>
      <LoginControl/>
    </div>
  );
}
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log("The link was clicked")
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggleOn:true};
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state=>({
      isToggleOn:!state.isToggleOn
    }))
  }
  render(){
    return <button onClick={this.handleClick}>
      {this.state.isToggleOn?"ON":"OFF"}
    </button>
  }
}
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  componentDidMount(){
    this.timerID=setInterval(
      ()=>this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>Hello,zhaozhenlan</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

export default App;
