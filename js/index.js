require('babel-polyfill');

let React = require('react');
let ReactDOM = require('react-dom');

let Board = require('./components/board');
let listNames = ['list1', 'list2', 'list3'];

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Hello World" lists={listNames} />, document.getElementById('app'))
});




