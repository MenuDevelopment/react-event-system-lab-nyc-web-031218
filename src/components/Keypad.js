import React from 'react'

class Keypad extends React.Component {


  logThatStuff = () => console.log("Entering password...")

  render(){
    return (
      <input type="password" onKeyUp={this.logThatStuff} />
    )
  }
}

export default Keypad
