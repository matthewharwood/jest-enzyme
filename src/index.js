// @flow
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
type Props = {

}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>logo</p>
        </header>
        <p className="App-intro">
          To get started, edit
        </p>
      </div>
    )
  }
}

const rootElement = document.querySelector('#root');
if(App !== null && rootElement !== null) {
  ReactDOM.render(<App />, rootElement);
}
export default App;


