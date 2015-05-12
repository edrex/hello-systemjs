import App from 'app/components/app';
import ReactTestUtils from 'react/lib/ReactTestUtils'
import React from 'react';

// https://facebook.github.io/react/docs/test-utils.html
// http://www.asbjornenge.com/wwc/testing_react_components.html

describe('App', function(){
  it('renders a div with one child node woopdidoo', function(){
    let shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(App));
    let result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('div');
    expect(React.Children.count(result.props.children)).to.equal(1);
  });
});
