import React, { Component } from 'react';
import {connect} from 'react-redux';
import { edit_post, del_post } from '../redux/action';

class Post extends Component {
  render() {
  return (
    <div className="container">
      <h3 key={this.props.post.id}>{this.props.post.title}</h3>
      <p>{this.props.post.message}</p>
      <button type="button" className="btn btn-outline-warning btn-sm"
       onClick={()=>this.props.dispatch(edit_post(this.props.post.id))}>
       Edit</button>
       
      <button type="button" className="btn btn-outline-danger btn-sm"
      onClick={()=>this.props.dispatch(del_post(this.props.post.id))}>
      Delete</button>
      <hr/>
    </div>
    
  );
 }
}
export default connect()(Post)