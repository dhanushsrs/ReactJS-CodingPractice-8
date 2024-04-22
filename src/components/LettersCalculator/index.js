// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeInputPhrase = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="letters-cal">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phraseText" className="para">
              Enter the phrase
            </label>
            <br />
            <input
              id="phraseText"
              className="input-phrase"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.changeInputPhrase}
            />
            <div className="para-btn">
              <p className="count">No.of letters: {count}</p>
            </div>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
