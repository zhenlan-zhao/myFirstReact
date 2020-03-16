import React from 'react';
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login,zhenlan!
    </button>
  )
}
function LogOutButton(props){
  return(
    <button onClick={props.onClick}>
      LogOut, zhenlan!
    </button>
  )
}
function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning">
      Warnig! Zhenlan!
    </div>
  )
}
class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state={showWarning:true}
    this.handleToggleClick=this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState=>({
      showWarning:!prevState.showWarning
    }));
  }
  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick} >
        {this.state.showWarning?"Hide":"Show"}
        </button>
      </div>
    );
  }
}
class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogOutClick=this.handleLogOutClick.bind(this);
    this.state={isLoggedIn:false};
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogOutClick(){
    this.setState({isLoggedIn:false})
  }
  render(){
    const isLoggedIn=this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button=<LogOutButton onClick={this.handleLogOutClick}/>
    }else{
      button=<LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        <Page/>
      </div>
    )
  }
}
export default LoginControl