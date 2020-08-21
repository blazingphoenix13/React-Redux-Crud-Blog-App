import React, { Component } from 'react'
import {connect} from 'react-redux'
import { add_post } from '../redux/action';


class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault(); // prevenets page refresh
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
          id: new Date(),
          title,
          message,
          editing:false
        }
        console.log(data)
        this.props.dispatch(add_post(data));
          this.getTitle.value = '';
          this.getMessage.value = '';
      }

    render() {
        return (
            <div class="container">
                <div class="jumbotron text-center">
                    <div class="container">
                    <h1>Create Posts</h1>
                    <p>What's on Your mind?</p>
                    </div>
                </div>
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                        <label>Title of the Post</label>
                        <input required type="text" class="form-control" placeholder="Provide an appropriate title for your content"
                        ref={(input)=>this.getTitle = input}/>
                        </div>
                
                <br /><br />
                <div class="form-group">
                        <label>Enter the Post</label>
                        <textarea required class="form-control" placeholder="Enter Post"
                        ref={(input)=>this.getMessage = input}/>
                </div>

                <button type="submit" class="btn btn-primary">Post</button>
                </form>
                <hr/>
            </div>
        </div>
        )
    }
}

export default connect()(PostForm)
