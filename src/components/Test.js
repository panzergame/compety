import React, { Component } from 'react'

class Test extends Component {
  state = {
    value: []
  }

  getValue() {
    fetch('http://localhost:3000/test1')
      .then(res => res.text())
      .then(text => this.setState({value: text}))
  }

  componentDidMount() {
        this.getValue()
  }

  render() {
    return (<p>Bijour {this.state.value}</p>)
  }
}

export default Test
