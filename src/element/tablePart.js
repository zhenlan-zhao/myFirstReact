import React from "react"


class ProductCategoryRow extends React.Component{
  render(){
    const category=this.props.category;
    return(
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}
class ProductRow extends React.Component{
  render(){
    const product=this.props.product;
    const name=product.stocked?
    product.name:
    <span style={{color:"red"}}>
      {product.name}
    </span>;
    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
class ProcuctTable extends React.Component{
  render(){
    const fileterText=this.props.fileterText;
    const inStcokOnly=this.props.inStcokOnly;

    const rows=[];
    let lastCategory=null;
    this.props.products.forEach(product => {
      if(product.name.indexOf(fileterText)===-1){
        return;
      }
      if(inStcokOnly && !product.stocked){
        return
      }
      if(product.category!==lastCategory){     
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category}/>
        );
      }
      rows.push(
        <ProductRow product={product} key={product.name}/>
      );
      lastCategory=product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFileterTextChange=this.handleFileterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
  }
  handleFileterTextChange(e){
    this.props.onFileterTextChange(e.target.value);
  }
  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }
  render(){
    const fileterText=this.props.fileterText;
    const inStcokOnly=this.props.inStcokOnly;

    return(
      <form>
        <input type="text" placeholder="Seach.." 
        value={fileterText} onChange={this.handleFileterTextChange}/>
        <p>
          <input type="checkbox" checked={inStcokOnly}
                onChange={this.handleInStockChange}/>
          {" "}
          Only show products in stock
        </p>
      </form>
    )
  }
}
class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fileterText:"",
      inStcokOnly:false
    }
    this.handleFileterTextChange=this.handleFileterTextChange.bind(this)
    this.handleInStockChange=this.handleInStockChange.bind(this);
  }
  handleFileterTextChange(fileterText){
    this.setState({
      fileterText:fileterText
    })
  }
  handleInStockChange(inStcokOnly){
    this.setState({
      inStcokOnly:inStcokOnly
    })
  }
  render(){
    return(
      <div className="tablePart">
        <SearchBar
          fileterText={this.state.fileterText} inStcokOnly={this.state.inStcokOnly}
          onFileterTextChange={this.handleFileterTextChange}
          onInStockChange={this.handleInStockChange}/>
        <ProcuctTable products={this.props.products}
          fileterText={this.state.fileterText} inStcokOnly={this.state.inStcokOnly}
        />
      </div>
    )
  }
}
export default FilterableProductTable