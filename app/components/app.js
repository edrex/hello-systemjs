import React from 'react';
import _ from 'bootstrap/css/bootstrap.css!';
import Hello from 'hello';

export default class extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <Hello name="JSPM and System.js"/>
        </div>
      </div>
    )
  }
}
