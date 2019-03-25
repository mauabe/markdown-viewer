import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
const marked = require('marked');

class App extends Component {

  state = {
    markdown: ''
  }

  updateMarkdown = function(markdown){
    this.setState({ markdown });
  }

  render() {
  let { markdown } = this.state;

    return (
      <div className="App">
      <div>
        <FormGroup controlId='formControlTextarea' />
          <FormLabel>Markdown Input</FormLabel>
          <FormControl componentclass='textarea' placeholder='enter markdown here...' value={ markdown } onChange={(event) => this.updateMarkdown(event.target.value)} ></FormControl>
      </div>
        <div>
          <h3>Markdown Output</h3>
          <div className='output' dangerouslySetInnerHTML = {{__html: marked(markdown)}}> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
 