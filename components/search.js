import React,{Component} from 'react';
class Search extends Component{
constructor(props){
    super(props);
}

    render(){
      return   <input type="text" /*onChange={this.props.handler}*/ placeholder="Enter your search here"/>
    }
}



export default Search;