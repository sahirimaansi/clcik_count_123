// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicking = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="pink-color"> {count} </span>times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button type="button" className="blue-button" onClick={this.onClicking}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
