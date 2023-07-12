import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: 0}

  onClickButton = () => {
    this.setState(prevState => {
      console.log(`previous state is ${prevState.isDarkMode}`)
      return {
        isDarkMode: prevState.isDarkMode <= 0 ? prevState.isDarkMode + 1 : 0,
      }
    })
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode === 0 ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode === 0 ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={modeClassName}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
