import React from 'react'
import ReactDOM from 'react-dom'
class NoMatchPage extends React.Component{
  _alert(){
  	alert("Hello")
  	console.log("hello")
  }
  render(){
    return(
      <div>
        <div>No page</div>
        <button onClick = {this._alert}>Alert</button>
      </div>
    )
  }
}
module.exports = NoMatchPage
