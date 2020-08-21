import React, { Component } from 'react'
import { connect } from 'react-redux';
import Post from './Post'
import EditComponent from './EditComponent';


class AllPosts extends Component {
    render() {
        return (
            <div class="container">
                <div class="jumbotron text-center">
                    <div class="container">
                    <h1>All Posts</h1>
                    <p>Read, update or delete your Posts here</p>
                    </div>
                </div>
                 
                {/* <p>{this.props.posts}</p> */}
                 {/* Method - 1 (working code) */}
                {/* {
                    this.props.posts.map(p=>(
                        <p><b key={p.id}>{p.title}</b> - 
                        {p.message}</p>
                    ))
                } */}
                {/* Method -2  */}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}


export default connect(mapStateToProps)(AllPosts)