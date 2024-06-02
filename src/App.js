
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  
  state = {
    progress:0,
    mode: 'light'
  }

  

  toggleMode = ()=>{
    if(this.state.mode === 'light'){
      this.setState({mode: 'dark'})
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else{
      this.setState({mode: 'light'})
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  
  

  render() {
  return (
    <div>
      <Router>
        <NavBar mode={this.state.mode} toggle={this.toggleMode} />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )}}
