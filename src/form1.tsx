import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Form1App extends React.Component {
  render() {
    return (
        <div>
          <h1>Form1</h1>
        </div>
    );
  }
}

ReactDOM.render(<Form1App/>, document.querySelector('#app'));

