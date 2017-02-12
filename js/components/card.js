let React = require('react');

let Card = function(props) {
  return (
      <div className="card">
          <p>{props.text}</p>
      </div>
  );
};

module.exports = Card;