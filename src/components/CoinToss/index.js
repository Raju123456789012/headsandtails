import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {count: 0, counter: 0, first: 0, second: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  imageButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))

    if (randomNumber % 2 === 0) {
      this.setState(prevState => ({first: prevState.first + 1}))
    } else if (randomNumber % 2 === 1) {
      this.setState(prevState => ({second: prevState.second + 1}))
    }
  }

  render() {
    const {count, counter, first, second} = this.state

    const image =
      count % 2 === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="container">
          <div className="container1">
            <h1 className="heading">Coins Toss Game</h1>
            <p className="para">Heads(or)Tails</p>
            <img src={image} alt="toss result" className="image" />
            <button className="button" type="button" onClick={this.imageButton}>
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count">Total:{counter}</p>
              <p className="count">Heads:{first}</p>
              <p className="count">Tails:{second}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
