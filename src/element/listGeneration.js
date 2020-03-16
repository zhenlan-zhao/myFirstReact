import React from 'react';

function ListItem(props){
  return <li>{props.value}</li>;
}
function NumberList(props){
  const numbers=props.numbers;
  const listItems=numbers.map((number)=>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <div>
      <ul>{listItems}</ul>
      {/* <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
      </ul>
      JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果： */}
      <Blog posts={props.posts}/>
    </div>
    
  )
}
function Blog(props){
  const sidebar=(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content=props.posts.map((post)=>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return(
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}

export default NumberList