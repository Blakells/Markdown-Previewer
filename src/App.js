import React, {Component} from 'react';
import './App.css';
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Quotes from './Quotes.jsx'
let marked = require('marked');

class App extends Component {

    state = {
      markdown: ''
    }
    
  
  updateMarkdown = function(markdown) {
    this.setState({markdown});
  }

  render() {
    let {markdown} = this.state;
    return (
      <div className="App container">
        <div>
        <FormGroup controlId='formControlsTextArea'>
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl componentClass= 'textarea' id='editor' placeholder= 'Say Something' value={markdown} onChange= {(event) => this.updateMarkdown(event.target.value)}>
            </FormControl>
          </FormGroup>        
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} id='preview'>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
