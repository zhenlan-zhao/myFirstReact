import React from 'react';
import LoginControl from "./element/loginControl";
import NumberList from './element/listGeneration';
import ControlledFrom from "./element/controlledForm";
import Calculator from "./element/cauculator"
import SignUpDialog from "./element/welcomeDialog"
import logo from './logo.svg';
import './App.css';
const numbers = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
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
      <NumberList numbers={numbers} posts={posts}/>
      <ControlledFrom />
      <div>
        Below is a temperature target:
        <Calculator/>
      </div>
      <div>
        Welcome All of You!
        <SignUpDialog/>
      </div>
    </div>
  );
}
function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log("The link was clicked")
  }
  return (
    <a href="www.baidu.com" onClick={handleClick}>
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
