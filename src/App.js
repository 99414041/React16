import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log(window.location)
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#inbox">Inbox</a></li>
        </ul>
        {/* <Child/> */}
      </div>
    )
  }
}

