import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import PostForm from './components/PostForm'
import AllPosts from './components/AllPosts'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <PostForm />
        <AllPosts />
        </Provider>
      </div>
    )
  }
}

export default App

