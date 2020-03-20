import React from "react"

const thems={
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}
const ThemeContext=React.createContext(
  thems.dark
)
const ThemeContextConsumer=React.createContext({
  theme:thems.dark,
  changeTheme:()=>{},
}
  
)
class ThemedButton extends React.Component{
  render(){
    let props=this.props;
    let theme=this.context;
    return (
      <button
        {...props}
        style={{backgroundColor:theme.background}}/>
    );
  }
}
ThemedButton.contextType=ThemeContext;
function ThemeToggleButton(){
  // Theme Toggler 按钮不仅仅只获取 theme 值，
  // 它也从 context 中获取到一个 toggleTheme 函数
  return(
    // 对于Consumer 这需要函数作为子元素（function as a child）这种做法。
    // 这个函数接收当前的 context 值，返回一个 React 节点。
    <ThemeContextConsumer.Consumer>
      {({theme,changeTheme})=>(
        <button
          onClick={changeTheme}
          style={{backgroundColor:theme.background}}>
            Toggle Theme Again  
        </button>
      )}
    </ThemeContextConsumer.Consumer>
  )
}
function Toolbar(props){
  return(
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}
function Content(){
  return(
    <div>
      <ThemeToggleButton/>
    </div>
  )
}
class SubThemedApp extends React.Component{
  constructor(props){
    super(props);
    this.changeTheme=()=>{
      this.setState(state=>({
        theme:
        state.theme === thems.dark
            ? thems.light
            : thems.dark,
      }));
    };
    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state={
      theme:thems.light,
      changeTheme:this.changeTheme
    }
  }
  render(){
    return(
      <ThemeContextConsumer.Provider value={this.state}>
        <Content />
      </ThemeContextConsumer.Provider>
    )
  }
}
class ThemedApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      theme:thems.light,
    };
    this.toggleThem=()=>{
      this.setState(state=>({
        theme:state.theme===thems.dark?thems.light:thems.dark,
      }));
    };
  }
  render(){
    return(
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleThem}/>
        </ThemeContext.Provider>
        <ThemedButton/>
      </div>
    )
  }
}
export  {ThemedApp,SubThemedApp}