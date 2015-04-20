"use babel";

import React from 'react';
import _ from 'bootstrap/css/bootstrap.css!';
import Hello from 'hello';

React.render(
  <div className="jumbotron">
    <div className="container">
      <Hello name="JSPM and System.js"/>
    </div>
  </div>,
  document.getElementById('main')
);
