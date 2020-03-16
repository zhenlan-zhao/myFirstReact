import React from "react"

function FancyBorder(props){
  return (
    <div className={"FancyBorder FancyBorder-"+props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

function Contracts(){
  return <div className="Contracts"></div>
}
function Chat(){
  return <div className="Chat"/>
}
function SplitPane(props){
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
function ShowPane(){
  return (
    <SplitPane
      lef={<Contracts/>}
      right={<Chat/>}/>
  );
}
class SignUpDialog extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSignUp=this.handleSignUp.bind(this);
    this.state={
      login:""
    }
  }
  render(){
    return(
      <div>
        <Dialog title="Mars Exploration Program" message="How should we refer to you?">
          <input value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>      
        </Dialog>
        <ShowPane/>
      </div>
    );
  }
  handleChange(e){
    this.setState({
      login:e.target.value
    });
  }
  handleSignUp(){
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}
export default SignUpDialog